import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 100,
  category: {
    id: '1',
    name: 'c1',
    createdAt:new Date(),
    updatedAt:new Date()
  },
});

