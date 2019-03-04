class Car {
    constructor (name, modelYear) {
        this.name = name,
        this.wheels = 4,
        this.modelYear = modelYear,
        this.light = "off",
        this.signal = "off",
        this.speed = 0
    }
    lights() {
        if (this.light === "off") {
            this.light = "on"
        } else {
            this.light = "off"
        }
    }
    signalLeft() {
        this.signal = "left"
    }
    signalRight() {
        this.signal = "right"
    }
    carInfo() {
        console.log(this.wheels, this.modelYear, this.light, this.signal, this.speed);
    }
}


class Tesla extends Car {
    constructor (name, modelYear) {
        super(name, modelYear)
    }
    speedUp() {
        this.speed += 10
    }
    braking() {
        //tesla is going at 10 once speed up. to slow down, subtract 7 from 10.
        //if we start with speed at 0
        if (this.speed !== 0) {
            this.speed -= 7
        }
    }
}

class Tata extends Car {
    constructor (name, modelYear) {
        super(name, modelYear)
    }
    speedUp (){
        this.speed += 2
    }
    braking() {
        if (this.speed !== 0) {
            this.speed -= 1.25
        }
    }
}


class Toyota extends Car {
    constructor (name, modelYear) {
        super(name, modelYear)
    }
    speedUp() {
        this.speed += 7
    }
    braking() {
        if (this.speed !== 0) {
            this.speed -= 5
        }
    }
}
let myCar = new Car("myCar", 2014)
let myTesla = new Tesla("myTesla", 2017)
let myTata = new Tata("myTata", 2015)
let myToyota = new Toyota("myToyota", 2018)
let myCarTwo = new Car("myCarTwo", 2008)
let myTeslaTwo = new Tesla("myTeslaTwo", 2005)
let myTataTwo = new Tata("myTata", 2007)
let myToyotaTwo = new Toyota("myToyotaTwo", 2000)

//create array (of objects)
//create blank array
//create function
//argument any input (...input)
//blank array push each input
//return that array that is no longer empty
//call + log it
// let carArray = []
// const addTooCarArray = (...input) => {
//     carArray.push(input)
//     console.log(carArray);
//     return carArray;
// }
// addTooCarArray(myCar, myTesla, myTata, myToyota, myCarTwo, myTeslaTwo, myTataTwo, myToyotaTwo)
//
// console.log(addTooCarArray());

let carArrayTwo = []
carArrayTwo.push(myCar, myTesla, myTata, myToyota, myCarTwo, myTeslaTwo, myTataTwo, myToyotaTwo);
//console.log(carArrayTwo[0].modelYear);

// function compare(a, b) {
//     let aCar = a.modelYear
//     let bCar = b.modelYear
//     let comp = 0;
//     if (aCar > bCar) {
//         comp = 1
//     } else if (bCar > aCar) {
//         comp = -1
//     }
//     return comp
// }

const compare = (a, b) => {
  let aCar = a.name
  let bCar =b.name
  let comp = 0
  if (aCar > bCar) {
    comp = 1
  } else if (bCar > aCar) {
    comp = -1
  }
  return comp
}
console.log(carArrayTwo.sort(compare));
