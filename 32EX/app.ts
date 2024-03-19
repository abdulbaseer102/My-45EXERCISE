let crrunt_users:string [] = ["abdulraqeeb","AbdulBaseer","Ajmal Khan","Zia Khan","Danial Nagori"]

let new_users:string [] = ["abdulraqeeb","baseer","ziakhan","Hazam"]

function MyNameCheck() {

    for (let i = 0; i<crrunt_users.length;i++){
        if (new_users[i] ===  "abdulraqeeb") {

            console.log(`User Name ${crrunt_users[0]} is Not Availibale try another`)
            
        }
        if (new_users[i]  === "baseer") {

            console.log(`User Name ${new_users[1]} is avaylibal`)
            
        }
    }
    
}

MyNameCheck()