import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

// Usando Partial podemos simplificar la escritura del código al hacer que todos los campos sean opcionales, en lugar de tener que copiar y pegar el producto original y agregar signos de interrogación en cada variable. Se realiza un Partial del createProductDto ya que este último tiene excepciones para modificar ciertos campos, como el id, createdAt y updatedAt.
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required deja todos los campos obligatorios.
type example2 = Required<Product>;

// omitimos tag
export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  // hay que aplicar el readonly de asignacion y el readonly de array que quita los metodos de reasignacion en arrays
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
