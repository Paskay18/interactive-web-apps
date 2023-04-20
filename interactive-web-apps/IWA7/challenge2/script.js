const nickname= "Timmy" ;
const firstname = 'Timothy';
const fullname= nickname || firstname 

if (nickname===null && firstname===null) {
    console.log('Good Morning!')
} else console.log(`Good Morning ${fullname}!`)  //the message was written as a string, the $ didnt have ``