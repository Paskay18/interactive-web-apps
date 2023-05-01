// script.js

function add (a,b) {
    return a + b;
}

function multiply (a,b) {
    return a * b;
}


function internal (a, b){
 
result1 = add(a, b )*multiply(a,b)
  return result1 }

const result2= internal(2,4);
console.log(result2)

const result3 = internal(2,2)
console.log(result3)

 
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
