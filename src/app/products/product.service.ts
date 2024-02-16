import { Product } from './product.model';
export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // Con readonly en el basemodel, no nos permite hacer cambios a nuestras variables. de esta manera esa variable solo queda de lectura.
  // data.id="readonly";
  // data.createdAt=new Date(1998,1,1)
  products.push(data);
};
