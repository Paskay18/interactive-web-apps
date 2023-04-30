let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'numerical-string';
    const calculatedAsNumber = isString ? calculated: parseInt(calculated);  //used parseNumber not parseInt, 
    calculated =calculatedAsNumber + 2;        //used === not =, had 1 instead of 2
    return calculated;  //didnt return value
}


const  calcUser= () => {                                  //had logcalc
  if (calculated >= 2) {user = 'John'};                     
  if (calculated >= 2) {state = 'requesting'};
  if (calculated >= 3) {state = 'idle'};                  //added = 
  return calculated;                                             //added return 
}

const checkUser = () => {
	if ( user && state !== 'requesting') {                 
		console.log(`User: ${user} (${calculated})`)
	}
}