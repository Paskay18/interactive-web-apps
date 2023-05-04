// scripts.js

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

const createArray = (length) => {
    const result = []

    for (0, i, length) {
        result
    }
}

const createData = () => {
    const current = new Date
    current.setDate(1)

    startDay = current.day
    daysInMonth = getDaysInMonth(current)

    weeks = createArray(5)
    days = createArray(7)
    value = null

    for (weekIndex in weeks) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]

        for (dayIndex in days) {
            value = dayIndex - startDay
            isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
            }]
        }
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

const createHtml = (data) => {
    let result = ''

    for (week, days in data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (dayOfWeek, value in days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)