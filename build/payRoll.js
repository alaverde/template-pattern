"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayRoll {
    constructor(seller) {
        this.seller = seller;
    }
    getSeller() {
        return this.seller;
    }
    getValuePayment() {
        return this.seller.getSalesMonth() * this.getComissionPercentage();
    }
}
exports.PayRoll = PayRoll;
