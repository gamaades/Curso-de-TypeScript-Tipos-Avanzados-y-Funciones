type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type userId = string | number;
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

// Refactorizando Product, pasaria de ser un tipo a una interfaz.

// Diferencias:
// Con la instrucción 'type', puedo definir tipos primitivos o compuestos de manera directa. Por ejemplo, al definir 'userId = string | number', abarco ambos tipos en una sola línea.
// Sin embargo, una interfaz requiere un cuerpo completo para su definición, por lo que no puedo crear una interfaz que represente un único tipo específico como 'type userId = string | number;'. En cambio, en una interfaz, puedo usar la extensión para definir propiedades adicionales o extender su funcionalidad.
// Una funcionalidad distintiva de las interfaces es que pueden ser extendidas, permitiendo la adición de nuevas propiedades o la extensión de las existentes. Por el contrario, los 'type' no pueden ser extendidos, lo cual constituye la principal diferencia entre ellos. Es por esta razón que muchos proyectos optan por utilizar interfaces, especialmente cuando se necesita extender su funcionalidad o aplicar patrones de herencia.
// A pesar de esta diferencia, los 'type' pueden ser utilizados como tipos más simples en cualquier parte del código. Por ejemplo, si tenemos una constante o una función para agregar productos, podríamos usar un 'type' sin problemas. Esto significa que podríamos recibir datos que se ajusten al tipo definido por el 'type Product'.
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createdAt: new Date(),
  stock: 110,
  size: 'XXL',
});

const addProduct = (data: Product) => {
  products.push(data);
};
