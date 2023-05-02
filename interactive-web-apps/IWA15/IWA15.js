const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below


//how to get each array
const {lists: [[,first]]}=data                   //used deconstruction method, could just get values directly
const {lists: [,[,second]]}=data
const {lists: [,,[,third]]}=data
const result = []



//getting arrays into the result array by comparing last 
const extractBiggest = () => {

    //getting each biggest value

const firstBiggestValue = first[first.length-1]
const secondBiggestValue = second[second.length-1]
const thirdBiggestValue = third[third.length-1]
 console.log(thirdBiggestValue)

 if (secondBiggestValue>firstBiggestValue){return second.pop()} 
 else if(firstBiggestValue>secondBiggestValue) {return first.pop()}
 
 if(secondBiggestValue>=1){return second.shift()}
 {return third.pop()}
 
 
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)