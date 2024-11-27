import { IMAGENES } from '../data/imagenes.js';

import { ImageItemList } from './ImageItemList.jsx';

export function ImageList({ setViewImage }) {
  return (
    <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {IMAGENES.map((imagen) => (
        <ImageItemList
          key={imagen.id}
          imagen={imagen}
          setViewImage={setViewImage}
        />
      ))}
    </section>
  );
}
