WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let customers = 1
let country = 'RSA'
let currency = 'null'
let shipping= 0

country='RSA'
currency='R'

if (country= 'RSA') {
            shipping = 400
        console }
    
if (country = 'NAM'){
            shipping = 600 }
                    else {shipping = 800}



        let shoes = 300 * 1
        let toys =100 * 5
        let shirts = 150 * 0
        let batteries = 35 * 2
        let pens = 5 * 0
        
        let cart =shoes + batteries + pens + shirts

       

if (cart >=1000 && country==='RSA' || cart>=60 && country==='NAM') {
    if(customers=1){
        shipping=0
    }
    
}

country='RSA'
currency='R'
console.log(shipping)


country !== 'NK'? console.log('price', currency, shoes + batteries + pens + shirts + shipping):console.log(BANNED_WARNING)
console.log(country)

