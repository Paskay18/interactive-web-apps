const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

/**
 * This function is used to create the different arrays which will be used to create
 * the columns and rows of the calender. It is used to change the lengths.
 * @param {} length 
 * @returns 
 */

const createArray = (length) => {
    const result = []

    for (let i=0; i<length; i++) {       
        result.push(i)
    }
    return result
}




const createData = () => {
 const current = new Date()

const startDay = current.getDay();
const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(5);    //added const to both weeks and days
    const days = createArray(7);
     let resultArray = [];

     for( let weekIndex=0; weekIndex< weeks.length; weekIndex++){
        let value ={
            week: weekIndex + 1,
            days: []
        
     };
      
     for ( let dayIndex=0; dayIndex< days.length; dayIndex++){
        const dayOfWeek= (weekIndex*7) + dayIndex - startDay + 1;
        const isValid = dayOfWeek> 0 && dayOfWeek <= daysInMonth;
         let classString = 'table_cell';

         if (dayIndex === 0 || dayIndex === 6){
            classString += 'table_cell_weekend';
         }
          value.days.push({ 
            dayOfWeek: dayIndex + 1,
            value: isValid? day: '',
            class: classString,
          }) ;
        }
        resultArray.weeks[weekIndex]= value; 
}
return weeks;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
    ${existing}
        <td class=" ${classString}>${value}</td>`
}


const createHtml = function(data) {  //removed => and wrote function instead
    let result = '';
    for (let i = 0; i < data.length; i++) {
      const week = data[i];   // added const and removed ,days in and replaced with =
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);   // added inner infront of addCell to declare after it was let in the top and added $ infront of {week} and used `` to interpolate in properly and added .week inside it
      
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];     //removed , value in days and replaced with . and added const before day and separated dayofWeek, removed of and replaced with =
        let classString = 'table__cell';  // added '' to make it a string
        const currentDate = new Date();  // declared current date to be new date
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();  //added currentDate and added getDate to get the date and getMonth to get the month
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;  //added day. and == before 1, removed && and added || added day so that i can acces dayofweek using dot notaion. added an extra = to make it stricter
        const isAlternate = week.week % 2 === 0; //added week
        if (isToday) {
          classString = `${classString} table__cell_today`;   //added {} and semicolons on the three if statements
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;   //added $ and back tags and removed '' and ==
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
        inner = addCell(inner, classString, day.value || '');  //added inner = infront of addCell
      }
      result += `<tr>${inner}</tr>`;  // added + sign before the = as it was not supposed to be a declaration and semicolon
    }
    return result;
  };
  const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)



