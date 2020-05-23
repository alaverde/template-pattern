export class Seller{
    private name:string;
    private salesMonth:number;

    constructor(name:string, salesMonth:number){
        this.name = name;
        this.salesMonth = salesMonth;
    }

    public getName(){
        return this.name;
    }

    public getSalesMonth(){
        return this.salesMonth;
    }
}