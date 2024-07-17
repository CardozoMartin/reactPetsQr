import React from 'react'
import img1 from "../Componentes/img/helpImg/img1.png"
import img2 from "../Componentes/img/helpImg/img2.png"
import img3 from "../Componentes/img/helpImg/img3.png"
import img4 from "../Componentes/img/helpImg/img4.png"
import img5 from "../Componentes/img/helpImg/img5.png"
import img6 from "../Componentes/img/helpImg/img6.png"
import Contacto from '../Componentes/Contacto/Contacto'






const HelpViews = () => {
  return (
    <>
    <section >
      <article className=''>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={img1}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Registro</h2>

              <p className="mt-4 text-gray-600">
                Antes de comenzar a cargar tus mascotas y poder generar los codigos qr debemos registrarnos en la web.
                Debemos presionar en el boton registro como indica en la imagen de la derecha
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Puedes registrarte ahora !
              </a>
            </div>
          </div>
        </div>
        
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src={img2}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                   Formulario de registro
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Debemos llenar todos los campos con nuestro datos es importante que los datos sean todos los nuestro 
                  </p>

                 
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={img3}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Inicio de sesion</h2>

              <p className="mt-4 text-gray-600">
                Una vez haber registrado con exito ya podemos acceder al sitio web. Nos vamos mas abajo o presionamos en el boton de la derecha superior y ingresamos con nuestro email y contraseña
              </p>

              
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src={img4}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                   Registro de mascotas
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Una vez ingresado la app nos aparece este formulario en donde nosotros podemos cargar nuestras mascotas. Es importante poner toda la informacion correcta y no erronea ya que esta informacion aparecera en el perfil de tu mascota y servira para el contacto en casa de que tu mascota este extraviada 
                  </p>

                 
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className=" h-64 overflow-hidden rounded-lg  lg:order-last lg:h-full">
              <img
                alt=""
                src={img5}
                className=" inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Mis Mascotas</h2>

              <p className="mt-4 text-gray-600">
                Cuando terminamos de cargar todos los datos de nuestra mascota nos aparecera una card donde podemos visualizar los datos de las mascota y en caso contrario editar o eliminar el perfil de la mascota
              </p>

              
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src={img6}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                   Codigo Qr
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Esta parte es importante este codigo qr es unico de nuestra mascota en el boton de abajo podemos descargar el codigo y tambien si presionamos en el codigo qr o escaneamos podemos visualizar el perfil de nuestra mascota.
                  </p>

                 
                </div>
              </div>
            </div>
          </div>

      </article>
    </section>
    <section className='bg-violet-700'>
    
    <Contacto></Contacto>
    </section>
    </>
    
  ) 
}

export default HelpViews