import { PayRoll } from "./payRoll";

export class PayRollTopSeller extends PayRoll{
    public getComissionPercentage():number{
        return 0.3;
    }
}