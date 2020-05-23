"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payRoll_1 = require("./payRoll");
class PayRollTopSeller extends payRoll_1.PayRoll {
    getComissionPercentage() {
        return 0.3;
    }
}
exports.PayRollTopSeller = PayRollTopSeller;
