WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

let customers = 1
let country = 'null'
let currency = 'null'
let shipping= 0



        let shoes = 300 * 1
        let toys =100 * 5
        let shirts = 150 * 0
        let batteries = 35 * 2
        let pens = 5 * 0
        
        let cart =shoes + batteries + pens + shirts

        country = 'RSA'
        currency='R'    

if (country==='RSA'  && cart>=1000 && customers===1|| country==='namB' && cart>=60 && customers===1) {
    shipping=0
}
else if (customers!==1){
    console.log(WARNING)
}
if (country==='RSA') {
        shipping = 400 ;}
        else if (country ==='namB'){
            shipping= 600
        } 
                    else {shipping = 800}


    




country !== 'NK'? console.log('price', currency, shoes+ toys + batteries + pens + shirts + shipping):console.log(BANNED_WARNING)


