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
  item = new CouponItem(
    [
      new CouponIdentityItem(CouponItemType.Name, "", "Libellé de l'offre"),
      new CouponIdentityItem(CouponItemType.Code, "", "Code promotionnel")
    ],
    [
      new CouponValidityItem(
        CouponItemType.From,
        "Période de validité",
        "Choisir une date",
        "Début"
      ),
      new CouponValidityItem(CouponItemType.To, "", "Choisir une date", "Fin")
    ],
    [
      new CouponParamItem(
        CouponItemType.Percent,
        "Réduction",
        "Pourcentage",
        "%"
      ),
      new CouponParamItem(CouponItemType.Duration, "Durée", "Nombre", "mois")
    ]
  );

  coupon = new Coupon("name", "code", 100, 12, "", "");

  couponList = [
    "Offre interne",
    "Offre interne",
    "Offre Fidélité",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b",
    "a",
    "b"
  ];

  formGroup: FormGroup;

  sub: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      [CouponItemType.Name]: this.coupon.name,
      [CouponItemType.Code]: this.coupon.code,
      [CouponItemType.Percent]: this.coupon.percent,
      [CouponItemType.Duration]: this.coupon.duration
    });
    this.sub = this.formGroup.valueChanges.subscribe(v => console.log(v));
  }
}

class Coupon {
  constructor(
    public name?: string,
    public code?: string,
    public percent?: number,
    public duration?: number,
    public fromDate?: string,
    public toDate?: string
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
    public title: string,
    public hint: string
  ) {}
}

class CouponValidityItem {
  constructor(
    public type: CouponItemType,
    public title: string,
    public hint: string,
    public subtitle: string,
    public date?: string
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
  Name = "NAME",
  Code = "CODE",
  From = "FROM",
  To = "TO",
  Percent = "PERCENT",
  Duration = "DURATION"
}
