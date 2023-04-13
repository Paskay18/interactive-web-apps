const STEP_AMOUNT=5

const number=document.querySelector('[data-key="number"]')
const substract=document.querySelector('[data-key="subtract"]')
const add=document.querySelector('[data-key="add"]')


const substractHandler = () => {
    const newValue= parseInt(number.value)-1
    number.value=newValue

    if(add.disabled===true){
        add.disabled=false
    }
     
        if(newValue<=MIN_NUMBER){
            substract.disabled=true
        }
    


}
const addHandler = () => { 
    const newValue= parseInt(number.value)+1
    number.value=newValue


     if(substract.disabled===true){
        substract.disabled=false 
    }
    
      

}


substract.addEventListener('click', substractHandler)
add.addEventListener('click', addHandler)