// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//creating book objects


const book1 ={
    status1: document.querySelector('span'),
    reserve1: document.querySelector('button'),
    checkOut1: document.querySelector('button.checkout'),
    checkIn1: document.querySelector('button.checkin'),
}



console.log(book1.checkOut1)
const book2 ={
    status2: document.querySelector('body>#book2'),
    reserve2 : document.querySelector('button'),
    checkOut2: document.querySelector('button.checkout'),
    checkIn2: document.querySelector('button.checkout'),
}
console.log(book2.status2)

const book3 ={
    status3: document.querySelector('span'),
    reserve3 : document.querySelector('button.reserve'),
    checkOut3: document.querySelector('button.checkout'),
    checkIn3: document.querySelector('button.checkin'),
}

//book1 Overdue
book1.ch