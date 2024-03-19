"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Pizzas = ["Fajeeta Pizza", "Chicken Pizza", "Veg Pizza"];
function Pizza() {
    for (let i = 0; i < Pizzas.length; i++) {
        if (Pizzas[i] == "Fajeeta Pizza") {
            console.log(`its Amazing and delsious Pizaa I Realy like ${Pizzas[0]}`);
        }
        else if (Pizzas[i] == "Chicken Pizza") {
            console.log(`Its Amazing I like it Beacuse Im Non-veg I Realy like ${Pizzas[1]}`);
        }
        else if (Pizzas[i] == "Veg Pizza") {
            console.log(`Its very bed pizza beacuse iM Non-Veg it is ${Pizzas[2]}`);
        }
    }
}
Pizza();
