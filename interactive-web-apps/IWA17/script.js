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

const startDay = new Date(current.getFullYear(), current.getMonth(), 1);
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
        weeks[weekIndex]= value; 
}
return weeks;
};

const addCell = (existing, classString, value) => {
    const result = /* html */ `
    ${existing}
        <td class=" ${classString}>${value}</td>`
}


const createHtml = (data) => {
    let result = '';

    for (let i=0; i< data.length; i++) {
        const week = data[i];
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
    
        for (let j=0; j<week.days.length; j++) {
            const dayOfWeek = week.days[j];
           
           
			

            let classString = 'table__cell';

             const isToday =current.getDate()=== day.value &&
             current.getMonth();

             const weekend = day.dayOfWeek === 1 || day.dayOfWeek === 7


						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}


const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
   