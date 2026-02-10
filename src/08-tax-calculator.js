/**
 * 💰 Sam's Tax Calculator
 *
 * Sam is a freelance graphic designer who dreads tax season every year.
 * Help Sam by building a tax calculator that uses progressive tax brackets.
 *
 * How progressive tax works:
 *   You don't pay the same rate on ALL your income. Each "slice" of income
 *   is taxed at its own rate:
 *
 *   Bracket 1: $0 – $10,000        → 0%  (tax-free!)
 *   Bracket 2: $10,001 – $30,000   → 10% (only on the amount ABOVE $10,000)
 *   Bracket 3: $30,001 – $70,000   → 20% (only on the amount ABOVE $30,000)
 *   Bracket 4: Over $70,000        → 30% (only on the amount ABOVE $70,000)
 *
 * Examples:
 *   - Income $8,000   → Tax = $0 (all in bracket 1)
 *   - Income $20,000  → Tax = 10% of ($20,000 - $10,000) = $1,000
 *   - Income $50,000  → Tax = $2,000 + 20% of ($50,000 - $30,000) = $6,000
 *   - Income $100,000 → Tax = $2,000 + $8,000 + 30% of ($100,000 - $70,000) = $19,000
 *
 * Rules:
 *   - If income is 0 or negative, return 0
 *
 * @param {number} income - Annual income in dollars
 * @returns {number} Total tax amount owed
 */
export function calculateTax(income) {
  // Your code here
  //======================== created this note for future referece to understand it in future =====================
    // part 2 and part 3 money on tax will be minus bcz if tax is above 70 k means part 2 and part 3 is money is deducted and tax will be applied there in case of 70k we reomve 10k first becz on 10k no tax is applied
    //--> after that part2 we have 60k and 60k - 20k so 40k remains and tax applied on full 20k which is 2000
    // after that part3 40k remains so tax o above 30k is 20% so 40k - 40k = 0 so full tax on 40k is 8000 for 20% of 40k is 8k so now both tax will be added which is 8k + 2k = finally 10k is all tax i have to give not tax is give on 70k of 30 % its ot like it's surcharges in every part and then aaplied and if money remians on 70k part then applid 30% on that remianing money and all tax is added after that 
  if (income <= 0) {
    return 0;
  }

  let taxSurcharge = 0;
  let actualTaxMoney = 0;
  let finalTax = 0;
  if (income > 0 && income <= 10000) {
    return taxSurcharge;
  }
  if (income > 10000 && income <= 30000) {
    actualTaxMoney = income - 10000; //2000
    taxSurcharge = 0.1 * actualTaxMoney;
    finalTax = taxSurcharge;
  }
  if (income > 30000 && income <= 70000) {
    actualTaxMoney = income - 30000; //it's before money of tax on 20k
    taxSurcharge = 0.2 * actualTaxMoney;
    finalTax = taxSurcharge + 2000;
  }
  if (income > 70000) {
    actualTaxMoney = income - 70000; 
    taxSurcharge = 0.3 * actualTaxMoney;
    finalTax = taxSurcharge + 8000 + 2000;
  }

  return finalTax;
}
