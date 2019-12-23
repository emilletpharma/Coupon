import {Component} from '@angular/core';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.scss'],
})
export class FormFieldOverviewExample {

  validityItemList = [
    new ValidityItem(ValidityItemType.From, "Période de validité", "Début", ""),
    new ValidityItem(ValidityItemType.From, "", "Fin", "")
  ]

  promotions = [
    {title: "Réduction", unit: "%"},
    {title: "Durée", unit: "mois"}
  ]


values = ["Offre interne", "Offre interne","Offre Fidélité", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b","a", "b",]

}

class ValidityItem {
  constructor(
    public type: ValidityItemType, 
    public title: string, 
    public subtitle: string, 
    public date: string) {}
}

enum ValidityItemType {From, To}

class OfferParamItem {
  constructor(
    public type: OfferParamItemType, 
    public name: string, 
    public unit: string, 
    public value: number) {}

}
enum OfferParamItemType {Discount, Lenght}

