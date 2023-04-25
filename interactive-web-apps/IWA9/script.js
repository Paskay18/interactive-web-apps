const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'smallRoom': 200,                                                 //written using the wrong format, changed to camelCase
    'largeRoom': 300,
'smallApartment': 400,
    'largeApartment': 800,
'smallHouse': 1200,
    'largeHouse': 2400,
}

// You can change below however you want

let taxAsDecimal = tax[913]                                            //have to change to number
    taxAsDecimal = parseFloat(tax[913])/100
    

const startingAfterTax = salary - salary*taxAsDecimal                  //salary*taxAsDecimal should be added to subract tax

const type = `${rent.largeApartment}`                                 //Interpolation of lodging & size
const balance = startingAfterTax - expenses.transport - expenses.food - type  //no startingAfterTax was added, wrong way of getting values from objects was used
console.log(balance.toFixed(2))                                         //logged to two decimal places  