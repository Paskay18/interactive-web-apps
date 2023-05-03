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

const books=[
    {
        status: document.querySelector('#book1 .status').innerText,
       
        html:{
        status: document.querySelector('#book1 .status'),
        reserve: document.querySelector('#book1 .reserve'),
        checkOut: document.querySelector('#book1 .checkout'),
        checkIn: document.querySelector('#book1 .checkin'),   
    },
   } ,{

    html:{
        status: document.querySelector('#book2 .status'),
        reserve: document.querySelector('#book2 .reserve'),
        checkOut: document.querySelector('#book2 .checkout'),
        checkIn: document.querySelector('#book2 .checkin'),   
    },
},
{

    html:{
        status: document.querySelector('#book3 .status'),
        reserve: document.querySelector('#book3 .reserve'),
        checkOut: document.querySelector('#book3 .checkout'),
        checkIn: document.querySelector('#book3 .checkin'),   
    },
}

]
 
//book1
books[0].html.checkIn.style.color = '#000000';
books[0].html.status.style.color=STATUS_MAP.overdue.color;
books[0].html.reserve= STATUS_MAP.overdue.canReserve ? 'enabled': 'disabled' ;
books[0].html.checkOut= STATUS_MAP.overdue.canCheckIn ? 'enabled': 'disabled';
books[0].html.checkIn= STATUS_MAP.overdue.canCheckIn ? 'enabled': 'disabled';

//book2
books[1].html.checkIn.style.color = '#000000';
books[1].html.status.style.color=STATUS_MAP.reserved.color;
books[1].html.reserve= STATUS_MAP.reserved.canReserve ? 'enabled': 'disabled' ;
books[1].html.checkOut= STATUS_MAP.reserved.canCheckIn ? 'enabled': 'disabled';
books[1].html.checkIn= STATUS_MAP.reserved.canCheckIn ? 'enabled': 'disabled';

//book3
books[2].html.checkIn.style.color = '#000000';
books[2].html.status.style.color=STATUS_MAP.shelf.color;
books[2].html.reserve= STATUS_MAP.shelf.canReserve ? 'enabled': 'disabled' ;
books[2].html.checkOut= STATUS_MAP.shelf.canCheckIn ? 'enabled': 'disabled';
books[2].html.checkIn= STATUS_MAP.shelf.canCheckIn ? 'enabled': 'disabled';




