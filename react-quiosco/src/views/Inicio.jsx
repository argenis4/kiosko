import {productos} from '../data/productos'
import Productos from '../components/Productos'
import useQuisco from '../hooks/UseQuiosco'
export default function Inicio() {

const { categoriaActual }= useQuisco()

  return (
    <>
 <h1 className='text-4xl font-black '>{categoriaActual.nombre}</h1>
 <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>
 <div className='grid gap-4 grid-cols-1  md:grid-cols-2 xl:grid-cols-3'>
  {productos.map(productos=>(
    <Productos 
    key={productos.imagen}
    productos={productos}
    />
  ))}</div>
    </>
  )
}
