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
    status1: document.querySelector('').getElementsByClassName("status")[0],
    reserve1: document.getElementById("book1").getElementsByClassName("reserve"),
    checkOut1: document.getElementById("book1").getElementsByClassName("checkout"),
    checkIn1: document.getElementById("book1").getElementsByClassName("checkin"),
}

const book2 ={
    status1: document.querySelector('#book2.status'),
    reserve1 : document.querySelector('#book2.reserve'),
    checkOut1: document.querySelector('#book2.checkout'),
    checkIn1: document.querySelector('#book2.checkin'),
}

const book3 ={
    status1: document.querySelector('#book3.status'),
    reserve1 : document.querySelector('#book3.reserve'),
    checkOut1: document.querySelector('#book3.checkout'),
    checkIn1: document.querySelector('#book3.checkin'),
}

//book1 Overdue

book1.status1.s = 'grayScale100%';
book1.status1.stycolor= STATUS_MAP.overdue.color;
book1.reserve1.disabled =! STATUS_MAP.overdue.canReserve;
book1.checkOut1.disabled=! STATUS_MAP.overdue.canCheckout;
book1.checkIn1.disabled=== STATUS_MAP.overdue.canCheckIn;



