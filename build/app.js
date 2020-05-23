"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seller_1 = require("./seller");
const payRollRegularSeller_1 = require("./payRollRegularSeller");
const payRollTopSeller_1 = require("./payRollTopSeller");
const james = new seller_1.Seller("James", 20000);
const rogger = new seller_1.Seller("Rogger", 45000);
const regularPayRoll = new payRollRegularSeller_1.PayRollRegularSeller(james);
const topPayRoll = new payRollTopSeller_1.PayRollTopSeller(rogger);
console.log(`Comisiones de ${regularPayRoll.getSeller().getName()}: $${regularPayRoll.getValuePayment()}`);
console.log(`Comisiones de ${topPayRoll.getSeller().getName()}: $${topPayRoll.getValuePayment()}`);
