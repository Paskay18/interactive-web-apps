const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let taxAsDecimal = tax                      //used let so it changes
  taxAsDecimal= parseInt(taxAsDecimal)      //tax was a string so you have to convert
  taxAsDecimal= taxAsDecimal/100


let startingAfterTax = salary - salary*taxAsDecimal       //'1' was a string 
let balance = startingAfterTax - transport - food - rent


if(hourOfDay===undefined && minuteOfDay=== undefined){           //they combined both codes
  balance=0
}else if (hourOfDay===0 && minuteOfDay === 0) {
	balance = startingAfterTax - transport - food - rent}

	
console.log(balance.toFixed(2))                            //used3 instead of 2