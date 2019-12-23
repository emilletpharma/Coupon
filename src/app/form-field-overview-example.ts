import {Component} from '@angular/core';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.scss'],
})
export class FormFieldOverviewExample {

  couponName: string;
  couponCode: string;


  couponValidityItemList = [
    new CouponValidityItem(CouponValidityItemType.From, "Période de validité", "Début"),
    new CouponValidityItem(CouponValidityItemType.From, "", "Fin")
  ]

  couponParamItemList = [
    new CouponParamItem(CouponParamItemType.Percent, "Réduction", "%"),
    new CouponParamItem(CouponParamItemType.Duration, "Durée", "mois")
  ]

  


couponList = ["Offre interne", "Offre interne","Offre Fidélité", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b",]

}

class Coupon {
    constructor(
    public name: string, 
    public discount: number,
    public lenght: number,
    public fromDate?: string, 
    public toDate?: string
    ) {}

}


class CouponValidityItem {
  constructor(
    public type: CouponValidityItemType, 
    public title: string, 
    public subtitle: string, 
    public date?: string) {}
}

enum CouponValidityItemType {From, To}

class CouponParamItem {
  constructor(
    public type: CouponParamItemType, 
    public title: string, 
    public unit: string, 
    public value?: number) {}

}
enum CouponParamItemType {Percent, Duration}



