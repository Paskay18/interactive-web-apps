const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
let sName = sarahName
    sName='Sarah '
let between=""
let owed = parseFloat( leoBalance) + parseFloat(sarahBalance)
owed= (owed*-1).toFixed(2)
owed1=owed.split('',2).join(between)
owed2=owed.split('13').join(between)
owed= owed1 + ` ${owed2}`

const leo =`${`  ${leoName} ${leoSurname} (Owed: R ${-1*parseFloat(leoBalance).toFixed(2)})` }`
const sarah = `${`  
  ${sName +sarahSurname}  (Owed: R ${-1*parseFloat(sarahBalance).toFixed(2)})`}`
const total = `
  ${`${divider}
      ${'Total amount owed: R'} ${owed}
  ${divider}`}`
const result = `${leo}${sarah}    

${total}` 




console.log(`${result}`)