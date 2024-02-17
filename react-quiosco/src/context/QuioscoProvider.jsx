import { createContext, useEffect, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  //=============   useState ===========//
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  //=============   Finish states  ===========//

  //=============   useeffect ===========//

  useEffect(()=> {
 const nuevoTotal = pedido.reduce((total, producto)=> (producto.precio * producto.cantidad ) + total, 0 )
 setTotal(nuevoTotal)

  },[pedido])

//=============   Finish useeffect  ===========//


  //=============   funciones ===========//

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];

    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleAddPedido = ({ categoria_id, ...producto }) => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoUpgrade = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );

      setPedido(pedidoUpgrade);
      toast.success("Item Modificado");
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al Pedido");
    }
  };
  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter(
      (producto) => producto.id === id
    )[0];
    setProducto(productoActualizar);
    setModal(!modal);
  };

  const handleEliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("Eliminado del pedido");
  };

  //=============  finish   funciones ===========//
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAddPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
