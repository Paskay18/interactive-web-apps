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
    status1: document.querySelector('.status#book1'),
    reserve1: document.getElementById("book1").getElementsByClassName("reserve"),
    checkOut1: document.getElementById("book1").getElementsByClassName("checkout"),
    checkIn1: document.getElementById("book1").getElementsByClassName("checkin"),
}

const book2 ={
    status2: document.querySelector('#book2.status'),
    reserve2 : document.querySelector('#book2.reserve'),
    checkOut2: document.querySelector('#book2.checkout'),
    checkIn2: document.querySelector('#book2.checkin'),
}

const book3 ={
    status3: document.querySelector('#book3.status'),
    reserve3 : document.querySelector('#book3.reserve'),
    checkOut3: document.querySelector('#book3.checkout'),
    checkIn3: document.querySelector('#book3.checkin'),
}

//book1 Overdue

book1.status1.ATTRIBUTE_NODE.= 'grayScale100%';
book1..stycolor= STATUS_MAP.overdue.color;
book1.reserve1.disabled =! STATUS_MAP.overdue.canReserve;
book1.checkOut1.disabled=! STATUS_MAP.overdue.canCheckout;
book1.checkIn1.disabled=== STATUS_MAP.overdue.canCheckIn;



