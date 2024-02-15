// Gus => [G,u,s] => string => string[]
// [G,u,s] => Gus => string[]  => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}
const nombreString: string = 'Gustavo';
const rtaArray = parseStr(nombreString);
// En este punto todavia no puede inferir si es un array o un string
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', nombreString, ' => ', rtaArray);

const nombreArray: string[] = ['G', 'u', 's'];
const rtaString = parseStr(nombreArray);
// En este punto todavia no puede inferir si es un array o un string
// rtaString.toLocaleUpperCase();
if (typeof rtaString === 'string') {
  rtaString.toLocaleUpperCase();
}
console.log('rtaString', nombreArray, ' => ', rtaString);
