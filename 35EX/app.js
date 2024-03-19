var animal = ["Dog", "Cat", "Lion"];
function Animals() {
    for (var i = 0; i < animal.length; i++) {
        if (animal[i] === "Dog") {
            console.log("".concat(animal[0], " Would Be great Pet"));
        }
        else if (animal[i] === "Cat") {
            console.log("".concat(animal[1], " Would Be great Pet"));
        }
        else if (animal[i] === "Lion") {
            console.log("please not cradle ".concat(animal[2], " At your Home"));
            console.log("\nIn the all animal is the one common this and it is all have four Lages");
        }
    }
}
Animals();
