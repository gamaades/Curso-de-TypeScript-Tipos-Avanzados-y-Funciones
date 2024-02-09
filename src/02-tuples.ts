// para que solo acepte numeros
// const prices:number[]=[1,2,3,4,5];

// asi definimos un arreglo de string y números
const prices: (string | number)[] = [1, 2, 3, 4, 5, 'precio'];

prices.push(1);
prices.push('1');

//Definiendo fuertemente el tipado con la tupla, de esta manera en la primera posición habrá un string y en la segunda un número
let user: [string, number, boolean];
user = ['gmanan', 1992, true];
// fallara porque estrictamente es un string y falta un valor (booleano)
// user=[123, 1992];

// esto es una desestructuración de una dupla.
const [username, age] = user;
console.log(username);
console.log(age);
