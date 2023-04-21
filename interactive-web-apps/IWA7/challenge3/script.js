const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat( leoBalance) + parseFloat(sarahBalance)
const leo =`${`  ${leoName} ${leoSurname} (Owed: R ${-1*parseFloat(leoBalance).toFixed(2)})` }`
const sarah = `${`  
  ${sarahName}${sarahSurname}  (Owed: R ${-1*parseFloat(sarahBalance).toFixed(2)})`}`
const total = `
  ${`${divider}
      ${'Total amount owed: R'} ${-1*owed.toFixed(2)}
  ${divider}`}`
const result = `${leo}${sarah}    

${total}` 
const owed1=owed.toLocaleString().replaceAll()
console.log(owed1)
console.log(`${result}`)