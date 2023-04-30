// script.js

function internal (a, b, result1){
    
    
    function add (a,b) {
        return a + b;
    }
    
    function multiply (a,b) {
        return a * b;
    }

    result1 = add.call(this.a,this.b )*multiply.call(this.a,this.b)
  return result1 }

 

 
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
