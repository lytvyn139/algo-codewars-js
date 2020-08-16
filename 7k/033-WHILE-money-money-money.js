//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

// 'P' = money to invest
// 'Y' = years to hold
// 'D' = desired sum of money 

// The sum is kept for 'Y' years in the bank
// interest 'I' is paid yearly. 
// After paying taxes 'T' for the year the new sum is re-invested.


/* 
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00 
  

  (1000*0.05) = $1050
  $1050 * (1 - 0.18) = 

After 1st Year -->
  P = 1041.00  =  $1050; $1050*0.18 
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
  
  */


function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    tax = 1 - tax;
    //when you pay taxes you dont get the 100% of your money, you get 100% - TAX(in percent, its the same as 1 - 0.18(in example)
    while (principal < desired) {
        principal += (principal * interest) * tax;
        console.log(`year: ${years} ${principal}`);
        years++;
    }
    return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));// 3


function calculateYears(principal, interest, tax, desired) {
    tax = 1 - tax;
    //when you pay taxes you dont get the 100% of your money, you get 100% - TAX(in percent, its the same as 1 - 0.18(in example)
    for (var years = 0; principal < desired; years++) { //let won't be vissible
        principal += (principal * interest) * tax;
        console.log(`year: ${years} ${principal}`);
    }
    return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));// 3