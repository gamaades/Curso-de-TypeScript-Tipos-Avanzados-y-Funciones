import { Product } from './product.model';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // Con readonly en el basemodel, no nos permite hacer cambios a nuestras variables. de esta manera esa variable solo queda de lectura.
  // data.id="readonly";
  // data.createdAt=new Date(1998,1,1)

  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

// Al utilizar la línea id: Product['id'], obtenemos el tipado específico que tiene el producto para ese parámetro en particular. Esto nos permite reutilizar el tipado de ciertas interfaces y obtenerlo mediante el índice, lo que facilita su manipulación o uso en otros contextos para mantener la consistencia del código.
export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // con readonly no me dejaria modificar los parametros de busqueda
  // dto.color = 'red';
  // no me deja cambiar el array
  // dto.tags=[];
  // pero si me deja cambiar el array de manera interna, esto esta mal ya que no deberia poder modicair el array. Con la linea que agregamos en el product.dto hace que no funcione la reasignacion ni la modificacion del array.
  // dto.tags?.pop();
  // dto.tags?.push();

  return products;
};
