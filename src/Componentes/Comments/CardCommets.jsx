import React from 'react';
import Card from './Card';

const CardCommets = ({ commets }) => {
  if (!commets || !Array.isArray(commets) || commets.length === 0) {
    return <div>No hay comentarios para mostrar.</div>;
  }

  return (
  <>
  
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <h1></h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {commets.map((item) => (
            <div key={item.id}>
            <Card commets={item} />
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default CardCommets;
