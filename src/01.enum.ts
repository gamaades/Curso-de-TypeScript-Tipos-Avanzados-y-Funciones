enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  userName: string;
  role: ROLES;
};

// una de las ventajas de tener enum, es una forma más directa de saber cuáles son las opciones que podría asígnale a una variable, de esta forma se llama directamente al enum que tiene un conjunto de opciones predeterminadas y simplemente se le indica que opción se quiere utilizar.
const gmananUser: User = {
  userName: 'gmanan',
  role: ROLES.ADMIN,
};

// capacitor es una libreria para hacer aplicaciones multiplataformas.
// https://capacitorjs.com/ -> plugins -> apis -> camera -> npm install @capacitor/camera
// archivo 01-camera.ts
