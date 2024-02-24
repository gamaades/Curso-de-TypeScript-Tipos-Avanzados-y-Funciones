import faker from '@faker-js/faker';

import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    size: faker.random.arrayElement(['M', 'S', 'XL', 'L']),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    categoryId: faker.datatype.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElements(),

    // title: string;
    // image: string;
    // description: string;
    // stock: number;
    // size?: Sizes;
    // color: string;
    // price: number;
    // category: Category;
    // isNew: boolean;
    // tags: string[];
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
  price: 27000,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags:['as', 'qwerty']
});
