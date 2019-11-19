class Armadillo {
  constructor(size, diet) {
    this.size = size;
    this.diet = diet;
  }
}
let newArmadillo = new Armadillo("medium", "omnivore");
console.log(newArmadillo);

class Bat {
  constructor(size, diet) {
    this.size = size;
    this.diet = diet;
  }
}
let newBat = new Bat("small", "omnivore");
console.log(newBat);

class Chinchilla {
  constructor(size, diet) {
    this.size = size;
    this.diet = diet;
  }
}
let newChinchilla = new Chinchilla("xsmall", "herbavore");
console.log(newChinchilla);

// class Car {
//   constructor(make, model, year, color, sound = "Engine Starting Sounds") {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
//     this.miles = 0
//     this.sound = sound
//   }
// }
// let newCar1 = new Car("Ford", "doodoo", 1988, "Olive", "ppppptttt")
// console.log(newCar1);