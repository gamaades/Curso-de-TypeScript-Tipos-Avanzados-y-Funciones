// Las variables declaradas como tipo 'any' pueden contener cualquier tipo de valor, lo que significa que podemos asignarles valores de cualquier tipo. Por lo tanto, podríamos crear una variable con un tipo específico y luego asignarle la variable 'anyVar', dado que esta última es de tipo 'any'.
// let anyVar:any;

// anyVar =null;
// anyVar =true;
// anyVar =undefined;
// anyVar =[];
// anyVar ={};
// anyVar =1;
// anyVar ='Hola';

// let isNew:boolean = anyVar;

let unknowVar: unknown;

unknowVar = null;
unknowVar = true;
unknowVar = undefined;
unknowVar = [];
unknowVar = {};
unknowVar = 1;
unknowVar = 'Hola';

// Unknow no dejaria apllicar ningun tipo de funcion.
// unknowVar.doSomething();
// Cuando ya tengamos la serteza de que es un tipo valor, se podran realizar funciones a corde al tipo, en este caso para string.
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
  let isNewV2:boolean = unknowVar;
}

const parse = (str: string) => {
  return JSON.parse(str);
};
