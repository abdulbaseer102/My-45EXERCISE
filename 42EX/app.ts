let Magician:string[] = ["Simon","Andrew","Ab"]

function MakeMagi() {
    console.log("Without Modifying:")

    for (let i = 0; i < Magician.length; i++) {
        const Mag = Magician[i];

        if ( Mag===Magician[i]  ) {
           

            console.log(Mag)
        
        }
        
    }
    
    
}

function ShowMag() {
    console.log("\nWith Modifying:")
    for (let i = 0; i < Magician.length; i++) {
        const Mag = Magician[i];
        Magician.pop()
        Magician.push("Abdulbaseer")

    console.log(Mag)
    }
}
MakeMagi()
ShowMag()