import Carrusel from "../Componentes/Carrusel/Carrusel";
import Commets from "../Componentes/Comments/Commets";
import FormCommets from "../Componentes/Comments/FormComments/FormCommets";
import Introi from "../Componentes/Common/Introi";
import Navbar from "../Componentes/Common/Navbar";
import Contacto from "../Componentes/Contacto/Contacto";
import Features from "../Componentes/Features/Features";
import FormLogin from "../Componentes/FormLogin/FormLogin";
import PetGallery from "../Componentes/Pets/PetsCard/PetGallery";
import FormPets from "../Componentes/Pets/PetsForm/FormPets";
import Services from "../Componentes/Services/Services";
import { useSession } from "../Store/UseSession";

import "./home.css";

const Home = () => {
  const { isLoggedIn } = useSession();

  return (
    <>
      {!isLoggedIn && (
        <div className="container">
         
          <Introi></Introi>
        </div>
      )}
      {!isLoggedIn && (
        <div>
          <FormLogin />
        </div>
      )}
      {isLoggedIn && (
        <div>
   
          <FormPets />
          <PetGallery />
          <FormCommets/>
        </div>
      )}
      <div className="containerTwho">
        <Features />
      </div>
      <div>
        <Commets/>
        
      </div>
      <div className="bg-violet-700 text-white contacContainer">
        <Contacto></Contacto>
      </div>
    </>
  );
};

export default Home;
