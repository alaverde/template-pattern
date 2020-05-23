import { Seller } from "./seller";
import { PayRollRegularSeller } from "./payRollRegularSeller";
import { PayRollTopSeller } from "./payRollTopSeller";

const james:Seller = new Seller("James", 20000);
const rogger:Seller = new Seller("Rogger", 45000);

const regularPayRoll:PayRollRegularSeller = new PayRollRegularSeller(james);
const topPayRoll:PayRollTopSeller = new PayRollTopSeller(rogger);

console.log(`Comisiones de ${regularPayRoll.getSeller().getName()}: $${regularPayRoll.getValuePayment()}`);
console.log(`Comisiones de ${topPayRoll.getSeller().getName()}: $${topPayRoll.getValuePayment()}`);