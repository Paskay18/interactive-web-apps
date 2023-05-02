const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const {lists: [[,first]]}=data
const {lists: [,[,second]]}=data
const {lists: [,,[,third]]}=data
const result = []

console.log(third[third.length-1])
const extractBiggest = () => {
       if (second[second.length-1]> first[first.length-1] && 
          (second[second.length-2]> first[first.length-2])){return shift(first)}

}



console.log(extractBiggest)

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