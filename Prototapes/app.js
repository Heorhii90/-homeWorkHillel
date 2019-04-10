"use strict"

const SIZE_SMALL = { cost: 50, calories: 20 };
const SIZE_BIG = { cost: 100, calories: 40 };
const STUFFING_CHEESE = { cost: 10, calories: 20 };
const STUFFING_SALAD = { cost: 20, calories: 5 };
const STUFFING_POTATOES = { cost: 15, calories: 10 };
const TOPPING_SAUCE = { cost: 15, calories: 0 };
const TOPPING_MAYO = { cost: 20, calories: 5 };


Hamburger.SIZE_SMALL = SIZE_SMALL;
Hamburger.SIZE_BIG = SIZE_BIG;
Hamburger.STUFFING_CHEESE = STUFFING_CHEESE;
Hamburger.STUFFING_SALAD = STUFFING_SALAD;
Hamburger.STUFFING_POTATOES = STUFFING_POTATOES;
Hamburger.TOPPING_MAYO = TOPPING_MAYO;
Hamburger.TOPPING_SAUCE = TOPPING_SAUCE;


Hamburger.prototype.addTopping = addTopping;
Hamburger.prototype.calculatePrice = calculatePrice;
Hamburger.prototype.calculateCaloriesies = calculateCaloriesies;


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);


function Hamburger(size, stuffing) {
    this.cost = size.cost + stuffing.cost;
    this.calories = size.calories + stuffing.calories;
}

function addTopping(value) {
    this.cost += value.cost;
    this.calories += value.calories;
}

function calculatePrice() {
    return this.cost;
}

function calculateCaloriesies() {
    return this.calories;
}


console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_MAYO);

console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Caloriesies: " + hamburger.calculateCaloriesies());
console.dir(hamburger)

