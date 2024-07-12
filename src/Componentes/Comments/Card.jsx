import React from 'react';

const Card = ({ commets }) => {
  // Asegúrate de que las propiedades de 'commet' están definidas
  

  return (
    <article className="group">
      <img
        alt="Imagen de mascota"
        src={commets.data.image}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{commets.data.userName}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {commets.data.comments}
        </p>
      </div>
    </article>
  );
};

export default Card;
