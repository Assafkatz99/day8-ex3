// 1)

practiceFile = [273.15]

practiceFile.push(42)
practiceFile.push("hello")
practiceFile.push(false,-4.6,"87")

// console.log(practiceFile);

// 2)

// 2.1)
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

cargoHold[cargoHold.indexOf('slinky')] = 'space tether'

// 2.2)

cargoHold.pop()

// 2.3)

// console.log(cargoHold.shift());
// console.log(cargoHold);

// 2.4)

cargoHold.push(1138)
cargoHold.unshift("20 meters")

// 2.5) 

// console.log(`The array leangth is ${cargoHold.length}, here is the array it self: ${cargoHold}`);

// 3)

// 3.1)

cargoHold.splice(3,0,"keys")
// console.log(cargoHold);

// 3.2)

cargoHold.splice(cargoHold.indexOf("instruction manual"),1)
// console.log(cargoHold);

// 3.3)

cargoHold.splice(2,3,'cat','fob','string cheese')

// 4)

// 4.1) 

holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']

// console.log(holdCabinet1.concat(holdCabinet2));
// console.log(holdCabinet1);

// 4.2)

// console.log(holdCabinet1.slice(0,2));
// console.log(holdCabinet2.slice(0,2));

// 4.3)

holdCabinet1.reverse()
holdCabinet2.sort()

// 5)

let str =  'In space, no one can hear you code.'

// console.log(str.split())
// console.log(str.split('e'))
// console.log(str.split(''))