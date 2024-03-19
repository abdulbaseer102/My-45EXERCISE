let user:string [] = ["Admin" , "Eric"]

function Names() {
    for(let i = 0;i<user.length; i++){
        if(user[i]==="Admin" ){
        console.log(" Hello Admin Would You Like To See Report")
        }
        else{
            console.log("Thanks For Logging in")
        }
    }
   
}
Names()