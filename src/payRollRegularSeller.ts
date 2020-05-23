import { PayRoll } from "./payRoll";

export class PayRollRegularSeller extends PayRoll{
    public getComissionPercentage():number{
        return 0.2;
    }
}