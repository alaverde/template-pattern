"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Seller {
    constructor(name, salesMonth) {
        this.name = name;
        this.salesMonth = salesMonth;
    }
    getName() {
        return this.name;
    }
    getSalesMonth() {
        return this.salesMonth;
    }
}
exports.Seller = Seller;
