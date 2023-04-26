const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log( holidays.futureId||`ID ${futureId} not created yet`)

//changing Christmas
const copied= holidays[6]
copied.name= 'X-mas'
copied.date= new Date(`25 December ${currentYear}`)

currentDate= new Date(`24 April ${currentYear}`)
correctDate = copied.date
correctDate.hours = 0
correctDate.minutes = 0
isEarlier = correctDate>currentDate
 
if (isEarlier){console.log('New date is earlier:true')
console.log('ID change:', holidays[christmas].id != copied.id || 'false')
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || '25/12/2023')
}
else{console.log('New date is earlier: false')}

const firstHolidayTimestamp =new Date(Math.min(
   new Date( holidays[0].date),
   new Date (holidays[1].date),
   new Date(holidays[2].date),
   new Date(holidays[3].date),
   new Date(holidays[4].date),
   new Date(holidays[5].date),
   new Date(holidays[6].date),
   new Date (holidays[7].date),
   new Date(holidays[8].date),
))
console.log(holidays[0].date)
const  lastHolidayTimestamp = new Date(Math.max(
    new Date( holidays[0].date),
    new Date (holidays[1].date),
    new Date(holidays[2].date),
    new Date(holidays[3].date),
    new Date(holidays[4].date),
    new Date(holidays[5].date),
    new Date(holidays[6].date),
    new Date (holidays[7].date),
    new Date(holidays[8].date),
))



const firstDay = firstHolidayTimestamp.getDate();
console.log(firstHolidayTimestamp.getDate())
const firstMonth = firstHolidayTimestamp.getMonth()+1;
console.log(firstHolidayTimestamp.getMonth())
const lastDay = lastHolidayTimestamp.getDate();
console.log(lastHolidayTimestamp.getDate())
const lastMonth = lastHolidayTimestamp.getMonth()+1;
console.log(lastHolidayTimestamp.getMonth())

console.log(`0${firstDay}/0${firstMonth}/${2030}`)
console.log(`${lastDay}/${lastMonth}/${2030}`)

const randomHoliday = new Date(Math.random(lastHolidayTimestamp - firstHolidayTimestamp))
console.log(randomHoliday)