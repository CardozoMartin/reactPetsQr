import { useQuery } from "@tanstack/react-query";


import { getPetFn } from "../../../API/ApiPet";
import PetCard from "./PetCard";

const PetGallery = () => {
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["pet"], queryFn: getPetFn });
 

  if (isError) {
    return <div>Ocurrio un error al cargar las mascotas</div>;
  }
  return (
    <>
      {isLoading ? (
        <h3 className="text-dark mt-3 text-center">Loading...</h3>
      ) : (
        <>
        <h1 className="text-center font-extrabold text-5xl">Mis Mascotas</h1>
        <PetCard pet={pet}></PetCard>
        </>
      )}
    </>
  );
};

export default PetGallery;