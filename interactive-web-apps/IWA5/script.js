WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

//NONE_SELECTED was declared as a string
//BANNED_WARNING was missing a g

//must all contain let because they change
let customers = 2  //location was already declared 
let country = 'null'
let currency = 'null'
let shipping= 0



        let shoes = 300 * 1
        let toys =100 * 5
        let shirts = 150 * NONE_SELECTED
        let batteries = 35 * 2
        let pens = 5 * NONE_SELECTED
        
        let cart =shoes + batteries + pens + shirts+ toys  //toys was missing in the calculation
console.log(cart)
        country = 'namB'     //have to declare country and currency
        currency='R'    

if (country==='RSA'  && cart>=1000 && customers===1){  //code was written wrong
    shipping=0}
if (customers>1){
    console.log(WARNING)
}
if (country==='RSA' && 1000>=cart ){
    shipping=400
   }
if (country==='RSA' && 1000>=cart){
    shipping=400
   }

if (country==='RSA'&& 1000>=cart){
    shipping= 400
}

if(country==='namB' && cart>=60 && customers===1){
    shipping=0
}
if (country==='namB' && 60>=cart ){
    shipping=600
   }
 if(country==='namB' && cart>=60 && customers>1){
    shipping=600
 }  

if(country!== 'RSA' && country!=='namB'){
    shipping=800
}


    




country !== 'NK'? console.log('price', currency, shoes+ toys + batteries + pens + shirts + shipping):console.log(BANNED_WARNING) //toys not included in calculation

