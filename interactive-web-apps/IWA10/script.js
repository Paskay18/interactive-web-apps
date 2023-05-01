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

console.log( holidays[futureId]||`ID ${futureId} not created yet`)  //to check if 9 was assigned

//changing Christmas
const copied= holidays[6]
copied.name= 'X-mas'
copied.date= new Date(`25 December ${currentYear}`)
console.log(copied.date)

//checking if current date is earlier

const currentDate= new Date(`24 April ${currentYear}`)
const correctDate = copied.date

isEarlier = correctDate>currentDate
if (isEarlier){console.log('New date is earlier:true')
console.log('ID change:', holidays[christmas].id != copied.id || 'false')
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || '25/12/2023')
}
else{console.log('New date is earlier: false')}

const  firstHoliday = Math.min(
   new Date( holidays[0].date).getTime(),
   new Date (holidays[1].date).getTime(),
   new Date(holidays[2].date).getTime(),
   new Date(holidays[3].date).getTime(),
   new Date(holidays[3].date).getTime(),
   new Date(holidays[3].date).getTime(),
   new Date(holidays[4].date).getTime(),
   new Date(holidays[5].date).getTime(),
   new Date(holidays[6].date).getTime(),
   new Date (holidays[7].date).getTime(),
   new Date(holidays[8].date).getTime(),
)

const lastHoliday = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)


const firstDay = new Date(firstHoliday).getDate()

const firstMonth = new Date (firstHoliday).getMonth()+1;
const lastDay = new Date (lastHoliday).getDate();
const lastMonth = new Date (lastHoliday).getMonth()+1;


console.log(`0${firstDay}/0${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)


//to get random date

const randomHolidayArray= [holidays[0], holidays[1], holidays[2], holidays[3], holidays[4],holidays[5], holidays[6], holidays[7], holidays[8]]


const randomHoliday= randomHolidayArray[Math.floor(Math.random()*randomHolidayArray.length)]

const randomDate = randomHoliday
const randomDateDay= new Date(randomDate.date).getDate()
const randomDateMonth= new Date(randomDate.date).getMonth()+1
const randomDateYear = new Date(randomDate.date).getFullYear()


if( randomDateDay>=10 && randomDateMonth>=10  ){
console.log(`${randomDateDay}/${randomDateMonth}/${currentYear}`)}else if(randomDateDay>=10 && randomDateMonth>=9 ){
    console.log(`${randomDateDay}/0${randomDateMonth}/${currentYear}`)}





    
    