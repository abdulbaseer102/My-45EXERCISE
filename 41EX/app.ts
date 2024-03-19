let Magician:string[] = ["Simon","Andrew","Ab"]

function PassMag() {

    for (let i = 0; i < Magician.length; i++) {
        const Mag = Magician[i];

        if ( Mag===Magician[i]  ) {
            console.log(Mag)
        
        }
        
    }
    
    
}
PassMag()