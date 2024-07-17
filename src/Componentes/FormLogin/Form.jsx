import React from 'react';
import { useSession } from '../../Store/UseSession';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { postLoginFn } from '../../API/ApiAuth';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import Input from '../Input/Input';

const Form = () => {
  const { login } = useSession();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { mutate: postLogin, isLoading } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      Swal.close();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
      });
      login(data);
      navigate('/');
    },
    onError: (e) => {
      Swal.close();
      console.log(e); // Verifica qué contiene e para asegurarte de tener acceso al mensaje de error
      toast.error(e.message || 'Error desconocido'); // Asegúrate de mostrar un mensaje claro en caso de error
    },
  });

  const onSubmit = (data) => {
    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
    }
  };

  return (
    <form
      className="mx-auto mb-0 mt-8 max-w-md space-y-4 relative bg-violet-700"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        placeholder="email"
        type="text"
        id="email"
        className="col-span-6 sm:col-span-3 bg-white"
        options={{
          required: true,
          minLength: 4,
          maxLength: 6000,
        }}
        name="email"
      />

      <Input
        register={register}
        placeholder="Contraseña"
        type="password"
        id="password"
        className="col-span-6 sm:col-span-3 border-white bg-white"
        options={{
          required: true,
          minLength: 4,
          maxLength: 6000,
        }}
        name="password"
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          ¿No tienes cuenta?    
          <Link className="underline font-extrabold  hover:text-black" to="/register">
           {"   "} Regístrate
          </Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-800"
          disabled={isLoading} // Deshabilita el botón mientras se carga la mutación
        >
          {isLoading ? 'Cargando...' : 'Ingresar'}
        </button>
      </div>
    </form>
  );
};

export default Form;
