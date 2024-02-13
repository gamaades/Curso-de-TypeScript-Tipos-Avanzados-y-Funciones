// problemas con el || ya no toma otros valores.
// export const createProduct = (
//   id: string | number,
//   isNew?: boolean,
//   stock?: number
// ) => {
//   return {
//     id,
//     stock: stock || 10,
//     isNew: isNew || true,
//   };
// };

// La solucion que dio JS es cambiar el operador || por ??
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

// en JS lo siguiente es así:
// 0 === false
// '' === false
// false === false
// si se envia cualquiera de estos valores, JS lo considera comoq que no existe, por lo que manda ese parametro por defecto


const p1 = createProduct(1, true, 10);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);

// acá podemos ver el error, ya que explicitamente mandamos un false y un cero y esta tomando los valores por defecto., en este caso stock=10 y isNew=true
const p3 = createProduct(3, false, 0);
console.log(p3);

const p4 = createProduct(4, undefined, undefined);
console.log(p4);
