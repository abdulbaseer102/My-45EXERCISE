let ordnumber:number[] = [1,2,3,4,5,6,7,8,9]

let ordunion:string|number
function ord(){
for(let i  =  0; i <ordnumber.length;i++){
         
        if(ordnumber[i] === 1){
            ordunion = "1st"
        }
        else if(ordnumber[i] === 2){
            ordunion = "2nd"
        }
        else if(ordnumber[i] === 3){
            ordunion="3rd"
        }
        else if(ordnumber[i] === 4){
            ordunion = "4th"
        }
        else if (ordnumber[i] === 5){
            ordunion = "5th"
        }
        else if(ordnumber[i] === 6){
               ordunion = "6th"
        }
        else if (ordnumber[i] === 7){
            ordunion = "7th"
        }
        else if (ordnumber[i] === 8){
            ordunion= "8th"
        }
        else if (ordnumber[i] === 9){
            ordunion = "9th"
        }
        else {
            console.log("No Ord Number")
        }
        console.log(ordunion)
}
}
ord()