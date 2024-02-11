import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

// takePicture, función asíncrona que captura con capacitor, el resultType es un enum que tiene las respuestas predeterminadas, CameraResultType.Uri y otras 2 opciones más. agremamos la opcion de abrir la camara frontal en la linea 9
const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    direction: CameraDirection.Front
  });

};
