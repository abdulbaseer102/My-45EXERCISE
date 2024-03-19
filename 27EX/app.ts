

let Alians:string []= ['Green', 'Red', 'Blue']



function AbdulGame() {

    if(Alians.includes("Blue")){
        console.log(`You Just Got 5 Points. Your Pick: Blue`)
    }
    if(Alians.includes("Red")  ){
        console.log(`You Just Got 10 Points. Your Pick: Red `)
    }
    if(Alians.includes("Green")   ){
        console.log(`You Just Got 15 Points. Your Pick: Green`)
    }
}

AbdulGame()