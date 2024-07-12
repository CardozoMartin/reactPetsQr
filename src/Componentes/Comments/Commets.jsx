import React from 'react';
import { getCommetFn } from '../../API/ApiComments';
import CardCommets from './CardCommets';
import { useQuery } from '@tanstack/react-query';
import EmblaCarousel from '../Carrusel/EmblaCarousel';

const Commets = () => {
  const {
    data,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['commets'], queryFn: getCommetFn });

  console.log("Data received from API:", data);

  if (isError) {
    return <div>Ocurrió un error al cargar los comentarios</div>;
  }

  // Asegúrate de que data sea un objeto con una propiedad 'data' que sea un array
  const commets = data && Array.isArray(data.data) ? data.data : [];

  return (
    <>
      {isLoading ? (
        <h3 className="text-dark mt-3 text-center">Loading...</h3>
      ) : (
        <EmblaCarousel comments={commets} />
      )}
    </>
  );
};

export default Commets;
