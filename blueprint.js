"use strict";

class Cars {
  constructor (wheels, topSpeed, color) {
    this.wheels = wheels;
    this.topspeed = topSpeed;
    this.color = color;
  }

  quarterMile (topSpeed) {
    return 'Speed after a quarter mile is ' + (0.25 / topSpeed * 3600) + ' in seconds';
  }
}

let car1 = new Cars(4, 150, 'black');
let car2 = new Cars(8, 250, 'red');

console.log(car1);
console.log(car1.quarterMile(car1.topspeed));
console.log(car2);
console.log(car2.quarterMile(car2.topspeed));
