export class Intermediary {

  cip? : string
	constructor(
    public name: string, 
    cip?: string, 
    public pharmacyName?: string, 
    public pharmacyCP?: string, 
    public pharmacyCity?: string,
    public pharmacyHolderName?: string, 
    public pharmacyEmail?: string) {
      this.cip = cip;
	}

	static fromJson(json: Intermediary): Intermediary {
		return new Intermediary(
      json.name, 
      json.cip, 
      json.pharmacyName, 
      json.pharmacyCP, 
      json.pharmacyCity, 
      json.pharmacyHolderName,
			json.pharmacyEmail);
	}
}