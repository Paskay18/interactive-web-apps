const date =2050            //used : instead of =
let status1 ='parent'       //used : instead of = and didnt rename status, value changes
let count = 0               //used const and value changes

// date doesnt change so it shouldnt be in if statement

console.log("January", 'New Year’s Day')      //didnt have  closing bracket
console.log("March", 'Human Rights Day')

console.log('April', 'Family Day')   
console.log('April', 'Freedom Day')
count= count+4       //count had let infront of it
	

if (status1 = 'student') {               //status wasnt renamed
        count= count+1
	  console.log('June', 'Youth Day')
		
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	
    
	console.log('December', 'Day of Reconciliation')
	count= count+3       //count had let infront of it

	if (status1 = 'parent') {
        count= count+1    //count had let in front of it
	  console.log('December', 'Christmas Day')
    }
  

	console.log('December', 'Day of Goodwill')
	count=count+1          //count had let in front of it
    


console.log('Your status is:', status1)        //status written incorrectly
console.log('The year is:', date)
console.log('The total holidays is:', count)    
 