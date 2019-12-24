import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  BehaviorSubject,
  combineLatest,
  interval,
  merge,
  Observable,
  of,
  Subject,
  Subscription
} from "rxjs";

/** @title Simple form field */
@Component({
  selector: "form-field-overview-example",
  templateUrl: "form-field-overview-example.html",
  styleUrls: ["form-field-overview-example.scss"]
})
export class FormFieldOverviewExample {
  item$ = new BehaviorSubject<CouponItem>(this.convertCouponToItem(new Coupon("name", "code", 100, 12, new Date(), new Date())));
  coupon$ = new BehaviorSubject<Coupon>(new Coupon("name", "code", 100, 12, new Date(), new Date()));
  couponList = ["Offre interne", "Offre interne", "Offre Fidélité"];
  formGroup: FormGroup;
  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group(new Coupon());


    this.sub2 = this.coupon$.subscribe(coupon => {
    
    setTimeout(() => {
      this.formGroup.setValue({...coupon}, {emitEvent: false})
      }, 500)
    
    
    }
      )

    this.sub = this.formGroup.valueChanges.subscribe(coupon => {
    //  console.log("AAA", coupon);
   //   this.coupon$.next({...coupon});
      this.item$.next(this.convertCouponToItem(coupon));

/*
      setTimeout(() => {
      this.coupon$.next(coupon);
      console.log(coupon);

      }, 1)
*/
    });
  }

  public convertCouponToItem(coupon: Coupon) {
    return new CouponItem(
      [
        new CouponIdentityItem(
          CouponItemType.Name,
          "Libellé de l'offre",
          coupon.name
        ),
        new CouponIdentityItem(
          CouponItemType.Code,
          "Code promotionnel",
          coupon.code
          
        )
      ],
      [
        new CouponValidityItem(
          CouponItemType.FromDate,
          "Période de validité",
          "Choisir une date",
          "Début",
          coupon.fromDate
        ),
        new CouponValidityItem(
          CouponItemType.ToDate,
          "",
          "Choisir une date",
          "Fin",
          coupon.toDate
        )
      ],
      [
        new CouponParamItem(
          CouponItemType.Percent,
          "Réduction",
          "Pourcentage",
          "%",
          coupon.percent
        ),
        new CouponParamItem(
          CouponItemType.Duration,
          "Durée",
          "Nombre",
          "mois",
          coupon.duration
        )
      ]
    );
  }

  public onValidityDateRequest(validityItem: CouponValidityItem, validityItems: CouponValidityItem[]): Date | null {
    const oppositeValidity = validityItems.filter(v => v.type !== validityItem.type).shift();
    return oppositeValidity ? oppositeValidity.date : null;
  }
}

/*
validity.type === 'toDate' && onValidityDateRequest('fromDate', validityItems) ? onValidityDateRequest('fromDate, validityItems') : null
*/

class Coupon {
  constructor(
    public name?: string,
    public code?: string,
    public percent?: number,
    public duration?: number,
    public fromDate?: Date,
    public toDate?: Date
  ) {}
}

class CouponItem {
  constructor(
    public identityItemList: CouponIdentityItem[],
    public validityItemList: CouponValidityItem[],
    public paramItemList: CouponParamItem[]
  ) {}
}

class CouponIdentityItem {
  constructor(
    public type: CouponItemType,
    public hint: string,
    public title?: string
  ) {}
}

class CouponValidityItem {
  constructor(
    public type: CouponItemType,
    public title: string,
    public hint: string,
    public subtitle: string,
    public date?: Date
  ) {}
}

class CouponParamItem {
  constructor(
    public type: CouponItemType,
    public title: string,
    public hint: string,
    public unit: string,
    public value?: number
  ) {}
}

enum CouponItemType {
  Name = "name",
  Code = "code",
  FromDate = "fromDate",
  ToDate = "toDate",
  Percent = "percent",
  Duration = "duration"
}
