// realizaremos una sobrecarga del input del metodo en el tipado de las entradas y salidas.
// se hizo dos veces, una por cada caso
// estas funciones son solo para el tipado, todavia no se resuelve el problema. a esto se le conoce como la sobrecarga. la solucion se mantiene igual.
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// Gus => [G,u,s] => string => string[]
// [G,u,s] => Gus => string[]  => string

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const nombreString: string = 'Gustavo';
const rtaArray = parseStr(nombreString);
// Por la sobrecarga que se realizo arriba, en este punto ya sabemos lo que retornara.
rtaArray.reverse();

console.log('rtaArray', nombreString, ' => ', rtaArray);

const nombreArray: string[] = ['G', 'u', 's'];
const rtaString = parseStr(nombreArray);
// Por la sobrecarga que se realizo arriba, en este punto ya sabemos lo que retornara.
rtaString.toLocaleUpperCase();

console.log('rtaString', nombreArray, ' => ', rtaString);


const rtaBoolean = parseStr(1992);
console.log('rtaBoolean', 1992, ' => ', rtaBoolean);
