import { formatearDinero } from "../helpers";
export default function Productos({ productos }) {
    const { nombre, precio, imagen, categoria } = productos;

    return (
        <div className="border p-3 shadow bg-white">
            <img
                className="w-full"
                alt={`imagen${nombre}`}
                src={`img/${imagen}.jpg`}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl  text-amber-500">
                    {formatearDinero(precio)}
                </p>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 twxt-white  w-full mt-5 p-3 uppercase font-bold"
                >
                    Agregar
                </button>
            </div>
        </div>
    );
}
