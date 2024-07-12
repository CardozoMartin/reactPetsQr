import React, { useState } from 'react';
import qrImg from '../../img/happy-qr-code-cute-mascot-character-vector-removebg-preview.png';
import { useForm } from 'react-hook-form';
import { postCommentFn } from '../../../API/ApiComments';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '../../../Store/UseSession';
import Swal from 'sweetalert2';
import Input from '../../Input/Input';


const FormCommets = () => {
    const { user } = useSession();
    const { register, handleSubmit, reset, setValue } = useForm();
    const [imageFile, setImageFile] = useState(null);
    const queryClient = useQueryClient();

    const { mutate: postComment } = useMutation({
        mutationFn: postCommentFn,
        onSuccess: () => {
            Swal.close();
            toast.success("Registro exitoso");
            reset();
            queryClient.invalidateQueries("comments");
        },
        onError: (error) => {
            Swal.close();
            toast.error(error.message || "Hubo un error en el registro");
        },
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    const onSubmit = (data) => {
    Swal.showLoading();
    const commentData = {
        ...data, userID: user.id 
    }

    postComment(commentData)
        
    };

    return (
        <section className="bg-gray-400">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-6">
                        <div>
                            <img src={qrImg} alt="QR Code" />
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <h1 className="text-center font-extrabold text-5xl">Deja tu comentario</h1>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="sr-only" htmlFor="comments">Comentario</label>
                                <Input
                                    register={register}
                                    placeholder="comments"
                                    type="text"
                                    id="comments"
                                    className="col-span-6 sm:col-span-3"
                                    options={{
                                        required: true,
                                        minLength: 4,
                                        maxLength: 6000,
                                    }}
                                    name="comments"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700 font-semibold">
                                    Selecciona la imagen de tu mascota
                                </label>
                                <div className="mt-1 flex items-center">
                                    <label
                                        className={`relative cursor-pointer bg-white border ${imageFile ? 'border-green-500' : 'border-gray-300'} rounded-md py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
                                    >
                                        <span>{imageFile ? 'Archivo cargado' : 'Subir archivo'}</span>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            className="sr-only"
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                    {imageFile && (
                                        <span className="ml-3 text-green-500 text-sm">{imageFile.name}</span>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Enviar Comentario
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormCommets;
