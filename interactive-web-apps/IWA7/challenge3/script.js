const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt( leoBalance + sarahBalance)
const leo = `${leoName} ${leoSurname}${leoBalance}`
const sarah = `${sarahName}${sarahSurname}${sarahBalance}`
const total = divider
              +"Total amount owed: "
const result = leo +''+ sarah + total + owed 


console.log(result)