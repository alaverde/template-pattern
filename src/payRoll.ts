import { Seller } from "./seller";

export abstract class PayRoll{
    private seller:Seller;

    constructor(seller:Seller){
        this.seller = seller;
    }

    public getSeller():Seller{
        return this.seller;
    }

    public getValuePayment():number{
        return this.seller.getSalesMonth() * this.getComissionPercentage();
    }

    public abstract getComissionPercentage():number;
}