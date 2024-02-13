const withoutEnd = () => {
  while (true) {
    console.log('Nunca para de aprender');
  }
};

const fail = (message: string) => { // TypeScript infiere que esta función se de tipo `never`
  throw new Error(message)
}


const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1, 2, 3, 4]));
console.log(example(12345)); // aca se detiene el programa.
console.log(example('despues del fail'));
