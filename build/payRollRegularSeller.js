"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payRoll_1 = require("./payRoll");
class PayRollRegularSeller extends payRoll_1.PayRoll {
    getComissionPercentage() {
        return 0.2;
    }
}
exports.PayRollRegularSeller = PayRollRegularSeller;
