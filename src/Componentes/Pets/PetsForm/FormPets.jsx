import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { toast } from "sonner";

import { usePet } from "../../../Store/UsePet";
import { useSession } from "../../../Store/UseSession";
import { postPetFn, putPetFn } from "../../../API/ApiPet";
import ImageUpload from "../../Input/ImageUpload";

const FormPets = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { user } = useSession();
  const { pet, clearPet } = usePet();
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (pet) {
      setIsEditing(true); // Establecer isEditing a true cuando se carga una mascota existente para editar
      setValue("name", pet.name);
      setValue("tipo", pet.tipo);
      setValue("raza", pet.raza);
      setValue("content", pet.content);
      setValue("direccion", pet.direccion);
      setValue("numberphone", pet.numberphone);
      setValue("facebook", pet.facebook);
      setValue("instagram", pet.instagram);

      if (pet.image) {
        setImage(pet.image);
      }
    } else {
      setIsEditing(false); // Asegurar que isEditing sea false cuando no hay una mascota para editar
      reset();
      setImage(null);
    }
  }, [pet, reset, setValue]);

  const queryClient = useQueryClient();

  const { mutate: postPet } = useMutation({
    mutationFn: postPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota agregada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
    },
    onError: (error) => {
      Swal.close();
      toast.error(error.message || "Ocurrió un error al crear la mascota");
    },
  });

  const { mutate: putPet } = useMutation({
    mutationFn: putPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota editada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
      clearPet();
    },
    onError: (error) => {
      Swal.close();
      toast.error(error.message || "Ocurrió un error al editar la mascota");
    },
  });

  const onSubmit = async (data) => {
    Swal.showLoading();

    const petData = {
      ...data,
      userID: user.id,
      image: image || pet.image, // Asegúrate de que image tenga un valor válido
    };

    if (isEditing) {
      // Si no se ha seleccionado una nueva imagen, mantener la imagen existente
      if (!image) {
        delete petData.image; // Eliminar image si es un objeto vacío ({})
      }
      const updatedPet = { ...pet, ...petData };
      putPet(updatedPet);
    } else {
      postPet(petData);
    }
  };


  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-violet-700">
      <div className="bg-yellow-50 bg-opacity-75 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
  <p className="font-bold text-center">Recorda</p>
  <p className="text-center">La informacion debe ser correcta. Ya que esta aparecera en el perfil de tu mascota</p>
</div>

      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-white sm:text-5xl">
          {isEditing ? "Editar mascota" : "Agregar una mascota"}
        </h1>
       
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-gray-100"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-center text-lg font-medium">Información de la mascota</p>

          <div>
            <label htmlFor="name" className="sr-only">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese el nombre de la mascota..."
            />
          </div>

          <div>
            <select
              name="tipo"
              id="tipo"
              {...register("tipo")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            >
              <option>Seleccione el tipo de mascota</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Conejo">Conejo</option>
              <option value="Caballo">Caballo</option>
              <option value="Hamster">Hamster</option>
            </select>
          </div>

          <div>
            <label htmlFor="raza" className="sr-only">
              Raza
            </label>
            <input
              type="text"
              id="raza"
              {...register("raza")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese el tipo de raza de tu mascota..."
            />
          </div>
          <div>
            <label htmlFor="content" className="sr-only">
              Comentario
            </label>
            <input
              type="text"
              id="content"
              {...register("content")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Agregue alguna información especial o cuidados médicos..."
            />
          </div>

          <ImageUpload onImageSelect={handleImageChange} />

          <p className="text-center text-lg font-medium">Información de contacto</p>
          <div>
            <label htmlFor="direccion" className="sr-only">
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              {...register("direccion")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Tu dirección Ej: Argentina, Alderetes, avenida Rivadavia..."
            />
          </div>
          <div>
            <label htmlFor="numberphone" className="sr-only">
              Número de Contacto
            </label>
            <input
              type="text"
              id="numberphone"
              {...register("numberphone")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese tu número de celular..."
            />
          </div>
          <div>
            <label htmlFor="facebook" className="sr-only">
              Red Social Facebook
            </label>
            <input
              type="text"
              id="facebook"
              {...register("facebook")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese tu Facebook ej: DanielTinCardozo"
            />
          </div>
          <div>
            <label htmlFor="instagram" className="sr-only">
              Red Social Instagram
            </label>
            <input
              type="text"
              id="instagram"
              {...register("instagram")}
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Ingrese su Instagram Ej: cardozo9"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            {isEditing ? "Editar" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPets;



