export class Intermediary {
	constructor(
    public name: string, 
    public cip?: string, 
    public pharmacyName?: string, 
    public pharmacyCP?: string, 
    public pharmacyCity?: string,
    public pharmacyHolderName?: string, 
    public pharmacyEmail?: string) {
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