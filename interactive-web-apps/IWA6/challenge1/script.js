const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

//both are strings so you have to change one inorder for you to use typeof

let primaryValid = Boolean(primaryPhone)===false
let secondaryValid = Boolean(secondaryPhone)===true

if (primaryValid === false){
    primaryValid=primaryPhone
    secondaryValid=parseInt(secondaryPhone)
}



console.log('Primary phone is valid numerical string:', typeof primaryValid ==='number')
console.log('Secondary phone is valid numerical string:', typeof secondaryValid==='number')


//another way

const primaryValid1 = primaryPhone    //its gonna register as NaN
const secondaryValid2 = parseInt(secondaryPhone)

console.log('Primary1 phone is valid numerical string:', typeof primaryValid1==='number')
console.log('Secondary2 phone is valid numerical string:', typeof secondaryValid2==='number')
