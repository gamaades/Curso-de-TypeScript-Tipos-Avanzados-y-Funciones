// Al utilizar ReadonlyArray, no podemos aplicar ninguna función que realice una mutación en el array, ya que este se considera de solo lectura. Sin embargo, todavía tenemos acceso a todos los métodos que no modifican el array.

// Definimos un array de números como ReadonlyArray
const numbers: ReadonlyArray<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Intentar aplicar funciones que mutan el array genera errores
// numbers.push(10); // Genera un error
// numbers.pop();    // Genera un error
// numbers.unshift(1); // Genera un error

// Aún podemos utilizar métodos que no mutan el array
numbers.reduce(() => 0); // Reduce el array sin modificarlo
numbers.map(() => 0);    // Crea un nuevo array sin modificar el original

