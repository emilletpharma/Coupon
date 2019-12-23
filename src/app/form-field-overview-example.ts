import {Component} from '@angular/core';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.scss'],
})
export class FormFieldOverviewExample {

    item = new CouponItem(
[
    new CouponIdentityItem(CouponItemType.Name ,"", "Libellé de l'offre"),
    new CouponIdentityItem(CouponItemType.Code ,"", "Code promotionnel")
  ],
[
    new CouponValidityItem(CouponItemType.From, "Période de validité", "Choisir une date", "Début"),
    new CouponValidityItem(CouponItemType.To, "", "Choisir une date", "Fin")
  ],
  [
    new CouponParamItem(CouponItemType.Percent, "Réduction", "Pourcentage", "%"),
    new CouponParamItem(CouponItemType.Duration, "Durée", "Nombre", "mois")
  ]
    )
    

couponList = ["Offre interne", "Offre interne","Offre Fidélité", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b",]

}

class Coupon {
    constructor(
    public name: string, 
    public percent: number,
    public duration: number,
    public fromDate?: string, 
    public toDate?: string
    ) {}

}

class CouponItem {
  constructor(
    public identityItemList: CouponIdentityItem[], 
    public validityItemList:  CouponValidityItem[],
    public paramItemList: CouponParamItem[]){}  
}

class CouponIdentityItem {
  constructor(
    public type: CouponItemType, 
    public title: string, 
    public hint: string,) {}

}

class CouponValidityItem {
  constructor(
    public type: CouponItemType, 
    public title: string,
    public hint: string,
    public subtitle: string, 
    public date?: string) {}
}

class CouponParamItem {
  constructor(
    public type: CouponItemType, 
    public title: string, 
    public hint: string, 
    public unit: string, 
    public value?: number) {}

}

enum CouponItemType {Name, Code, From, To, Percent, Duration}



