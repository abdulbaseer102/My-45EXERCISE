const OrgMag:string []= ["Abdul","Ajmal","khan"]

const GreatMag:string [] = ["Simon","Andrew","Jmaes"]

function NormalMag(){

    console.log("Normal Magician:")
    for (let i = 0; i < OrgMag.length; i++) {
        const element = OrgMag[i];

        if (element === OrgMag[i]) {
            console.log(element)
            
        }
        
    }
}
function GreatMagi(){

    console.log("\nGreat Magician:")
    for (let i = 0; i < GreatMag.length; i++) {
        const element = GreatMag[i];

        if (element === GreatMag[i]) {
            console.log(element)
            
        }
        
    }
}

NormalMag()
GreatMagi()