export function ImageItemList({ imagen, setViewImage }) {
  return (
    <article>
      <figure className="h-full shadow-xl shadow-black/50">
        <img
          className="h-full object-cover cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 rounded-md"
          src={imagen.src}
          alt={imagen.alt}
          onClick={() => {
            setViewImage(imagen);
          }}
        />
      </figure>
    </article>
  );
}
