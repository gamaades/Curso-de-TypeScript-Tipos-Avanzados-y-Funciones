export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true,
) => {
  return {
    id,
    stock: stock,
    isNew: isNew,
  };
};

const p1 = createProduct(1, 12, true);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, 0 ,false);
console.log(p3);

const p4 = createProduct(1,  1200,true);
console.log(p4);

const p5 = createProduct(5,  12,true);
console.log(p5);

