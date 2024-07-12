import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Modal from 'react-modal';

import { getPetByIdFn } from "../API/ApiPet";
import GoogleMapEmbed from "../Componentes/Maps/GoogleMapEmbed";
import ButtonGroup from "../Componentes/Input/ButtonGroup";

// Configuración de accesibilidad para react-modal
Modal.setAppElement('#root');

const ForPetId = () => {
  const { petId } = useParams(); // Obtiene el petId de la URL usando useParams

  const { data: pet, isLoading, isError } = useQuery({
    queryKey: ["pet-by-id", petId],
    queryFn: () => getPetByIdFn(petId),
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (isLoading) {
    return (
      <>
        <h1>Cargando...</h1>
        <hr />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Error</h1>
        <hr />
        <div className="alert alert-danger">Ocurrió un error</div>
      </>
    );
  }

  if (pet) {
    return (
      <>
        <section className="mb-96">
          <div className="w-full h-screen bg-gray-100 px-20 pt-20 border">
            <div className="relative mt-16 mb-32 max-w-lg mx-auto mt-24 ">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32 cursor-pointer" onClick={openModal}>
                    <img
                      src={pet.data.image}
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" mt-10 mb-10">


                    <h1 className="font-bold text-3xl text-center mb-1">
                      <span className="font-light text-gray-500 text-sm">Me llamo :  </span>
                      {pet.data.name}
                    </h1>
                    <p className="text-gray-800 font-medium text-sm text-center">
                      Raza: {pet.data.raza}
                    </p>
                  </div>

                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Información Adicional: {pet.data.content}
                  </p>
                  <h4 className="text-center font-medium mt-4">INFORMACION DE CONTACTO</h4>
                  <ButtonGroup pet={pet} />
                  <div className="flex justify-center">
                    <button
                      className="select-none rounded-lg bg-purple-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex mb-2 sm:mb-0"
                      type="button"
                    >
                      <a
                        href={`https://www.instagram.com/${pet.data.instagram}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <i className="bi bi-instagram text-xl"></i>{" "}
                        <span className="mt-1 ms-2">Instagram</span>
                      </a>
                    </button>

                  </div>
                  <p className="text-gray-800 font-extrabold mt-5 mb-5 text-sm text-center">
                    Dirección: {pet.data.direccion}
                  </p>
                </div>
                <GoogleMapEmbed address={pet.data.direccion} />
              </div>
            </div>
          </div>
        </section>
        {/* Aquí se pasa la dirección al componente GoogleMapEmbed */}

      </>
    );
  }

  return null;
};

export default ForPetId;
