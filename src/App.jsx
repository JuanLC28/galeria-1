import { useState } from 'react';

import { ImageList } from './components/ImageList';
import { ImageModal } from './components/ImageModal';

function App() {
  const [viewImage, setViewImage] = useState(null);

  return (
    <main className="w-4/5 md:w-3/5 mx-auto my-20">
      <h1 className="text-gray-200 font-bold text-3xl md:text-4xl text-center mb-3">
        Galería de Imágenes
      </h1>
      <p className="text-gray-200 text-base md:text-lg text-center">
        Muestra un conjunto de imágenes con opciones para hacer clic y ver la
        imagen en tamaño completo
      </p>

      <ImageList setViewImage={setViewImage} />

      {viewImage && (
        <ImageModal viewImage={viewImage} setViewImage={setViewImage} />
      )}
    </main>
  );
}

export default App;
