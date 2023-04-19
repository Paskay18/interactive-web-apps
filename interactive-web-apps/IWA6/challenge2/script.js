const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let taxAsDecimal = tax
  taxAsDecimal= parseInt(taxAsDecimal)      //tax was a string
  taxAsDecimal= taxAsDecimal/100


let startingAfterTax = salary - salary*taxAsDecimal
let balance = startingAfterTax - transport - food - rent


if(hourOfDay===undefined && minuteOfDay=== undefined){
  balance=0
}else if (hourOfDay===0 && minuteOfDay === 0) {
	balance = startingAfterTax - transport - food - rent}

	
console.log(balance.toFixed(2))