import { useSession } from "../../../Store/UseSession";
import Card from "./Card";

const PetCard = (props) => {
  const { pet } = props;
  const { user, loading, isLoggedIn } = useSession();
  const userId = user.id;

  // Filtrar las mascotas del usuario
  const filterPetId = pet && pet.data ? pet.data.filter((item) => item.userID === userId) : [];

  // Verificar si no hay mascotas para mostrar
  if (filterPetId.length === 0) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <p className="text-center">Aún no has cargado ninguna mascota.</p>
      </div>
    );
  }

  // Mostrar las mascotas filtradas
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filterPetId.map((item) => (
          <div key={item.id}>
            <Card pet={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCard;
