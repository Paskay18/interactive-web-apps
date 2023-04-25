const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line


/** values were assigned without = in the const
 *  values inside object used = not :
 *  access ID was not supposed to be assigned
 *  
  */

const leo = { 
    age: 24,                       //new age value                   //age values being reassigned
	name :leoName, 
    balance : leoBalance,                              //leoSurname removed
	address: address= {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal
	}
}

const sarah = {
    age:62,
	name:sarahName+sarahSurname,
	address: address= {
		number :sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal
	}
}


console.log(leo.address.postalCode)
console.log(sarah.address.postalCode)