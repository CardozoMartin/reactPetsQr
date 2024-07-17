import React, { useState } from 'react';
import qrImg from '../../img/happy-qr-code-cute-mascot-character-vector-removebg-preview.png';
import { useForm } from 'react-hook-form';
import { postCommentFn } from '../../../API/ApiComments';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from '../../../Store/UseSession';
import Swal from 'sweetalert2';
import Input from '../../Input/Input';
import ImageUpload from '../../Input/ImageUpload';
import { toast } from 'sonner';
import TextAreaInput from '../../Input/TextAreaInput';
 // Ensure you have toast imported

const FormCommets = () => {
    const { user } = useSession();
    const { register, handleSubmit, reset } = useForm();
    const [image, setImage] = useState(null);

    const queryClient = useQueryClient();

    const { mutate: postComment } = useMutation({
        mutationFn: postCommentFn,
        onSuccess: () => {
            Swal.close();
            toast.success("Muchas gracias por el comenatario ♥");
            reset();
            queryClient.invalidateQueries("comments");
        },
        onError: (error) => {
            Swal.close();
            toast.error(error.message || "Hubo un error en el registro");
        },
    });

    const onSubmit = (data) => {
        Swal.showLoading();
        const commentData = {
            ...data,
            userID: user.id,
            userName: user.firstname,
            image: image,
        };

        postComment(commentData);
    };

    const handleImageChange = (newImage) => {
        setImage(newImage);
    };

    return (
        <section className="bg-violet-700">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-2">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-6">
                        <div>
                            <img src={qrImg} alt="QR Code" />
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <h1 className="text-center font-extrabold text-5xl mb-20">Deja tu comentario</h1>
                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="sr-only" htmlFor="comments">Comentario</label>
                                <TextAreaInput
                                    register={register}
                                    
                                    type="text"
                                    id="comments"
                                    className="col-span-6 sm:col-span-3"
                                    options={{
                                        required: true,
                                        minLength: 4,
                                        maxLength: 6000,
                                    }}
                                    name="Ingresa tu comentario"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="image" className="block text-sm font-medium text-gray-700 font-semibold">
                                    Selecciona la imagen de tu mascota
                                </label>
                                <ImageUpload onImageSelect={handleImageChange} />
                            </div>
                            <div className="pt-20">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-violet-700 px-5 py-3 font-medium text-white sm:w-auto"
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
