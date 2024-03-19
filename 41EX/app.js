var Magician = ["Simon", "Andrew", "Ab"];
function PassMag() {
    for (var i = 0; i < Magician.length; i++) {
        var Mag = Magician[i];
        if (Mag === Magician[i]) {
            console.log(Mag);
        }
    }
}
PassMag();
