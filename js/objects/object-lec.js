// object instance

// const car = new Object();

//Object Literal

const car = {};

car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();