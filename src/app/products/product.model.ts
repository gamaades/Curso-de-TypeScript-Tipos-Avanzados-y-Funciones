import { Category } from '../categories/category.model';
import {BaseModel} from '../base.model'

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

// Al importar BaseModel y extenderlo, podemos omitir los campos comentados, ya que al extenderlo, estos se incorporarán automáticamente. Este enfoque refleja el concepto de herencia, donde BaseModel proporciona una base común con esos campos.
// Este patrón nos permite utilizar un modelo base como punto de partida para crear otros modelos. Esta capacidad es una de las características clave de la interfaz, ya que permite la extensión de funcionalidades sin tener que recrear desde cero. En contraste, si uno crea un tipo nuevo, no se puede extender de manera tan sencilla.

export interface Product extends BaseModel{
  // id: string | number;
  // createdAt: Date;
  // updatedAt: Date;
  title: string;
  stock: number;
  Size?: Size;
  category: Category;
}
