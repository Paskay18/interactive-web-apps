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
    current.setDate(1)

    //to get start day

const startDay = new Date(current.getFullYear(), current.getMonth(), 1)
const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)
    console.log(days)
    let valueWeeks = null
    let valueDays = null
     let day = null
    

     // to get the different days in the month
     for( let i=0 ; i< daysInMonth ;i++ ){
         day = day +1 
        console.log(day)
    }

    for (const weekIndex in weeks) {
        valueWeeks = [{
            week: weekIndex + 1,
            days: []
        }]
 
        for (const dayIndex in days) {
            valueDays = dayIndex + startDay}
            

            const isValid = day> 0 && day <= daysInMonth
            
            if (isValid){
                result[weekIndex].days = [{
                    dayOfWeek: dayIndex + 1,
                    value: isValid && day,
                }]
            }
            
 console.log(isValid)
            
    }
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
 