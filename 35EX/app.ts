let animal:string [] = ["Dog","Cat","Lion"]

function Animals() {

    for(let i = 0; i<animal.length;i++){
        if(animal[i] === "Dog"){
            console.log(`${animal[0]} Would Be great Pet`)
        }
        else if(animal[i] ==="Cat" ){
            console.log(`${animal[1]} Would Be great Pet`)
        }
        else if(animal[i] ==="Lion"){
            console.log(`please not cradle ${animal[2]} At your Home`)
            console.log("\nIn the all animal is the one common this and it is all have four Lages")
        }
       
    }
    
}
Animals()