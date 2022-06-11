let car = { type: "Fiat", model: "500", color: "white" };

let car2 = { type: "BM", model: "525", color: "Black" };

[car, car2] = [car2, car];

console.log(car);
