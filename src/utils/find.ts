import { PhotoTypes } from '../types/photoTypes';


export const findPhotos = (photos:PhotoTypes[],id:number ) => {
    const findPhotos = photos.find((item:PhotoTypes) => item.id === id);


}


