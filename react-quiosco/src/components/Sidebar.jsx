import useQuisco from "../hooks/UseQuiosco";
import Categorias from "./Categorias";

export default function Sidebar() {
  const{ categorias }= useQuisco()
  
  return (
    <aside className="md:w-72">
      <div 
      className="p-4">
        <img 
        className="w-40 " 
        src="../img/logo.svg" />
      </div>
      <div className="mt-10">
        {categorias.map( categoria=> (
      <Categorias
      key={categoria.id}
      categoria={categoria}
      
      />
        ))} 
        </div>
        <div className="my-5 px-5">
          <button type="button" className="text-center bg-red-500 w-full p-5 font-bold text-white truncate">
          Cancelar Orden
          </button>
        </div>
    </aside>
  );
}
