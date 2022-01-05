import React, { useState } from 'react';



const Context = React.createContext();

const CartFuncion = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [unidades, setUnidades] = useState(0);
  const [total, setTotal] = useState(0);
  const [userEmail, setUserEmail] = useState('')


  const onAdd = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      setCart([
        ...cart,
        {
          ...producto,
          cantidad: cantidad,
          subtotal: producto.price * cantidad,
        },
      ]);
      setTotal(total + producto.price * cantidad);
      
     
      setUnidades(unidades + cantidad);
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.price * cantidad;
        }
        return item;
      });
      setCart(cartAux);
      setTotal(total + producto.price * cantidad);

      
      setUnidades(unidades + cantidad);
    }
  };



 
  const onRemove = (id) => {
  
    const myItem = cart.find((item) => item === item);
    

    const cartAux = cart.filter((item) => item !== item);

  
    setCart(cartAux);

    setUnidades(unidades - myItem.cantidad);

    setTotal(total - myItem.subtotal);
  };

  const clearCart = () => {
    setCart([])
    setTotal(0)
    setUnidades(0)
  }

  const getUser = (form) => {
    setUserEmail(form)
  }
  console.log(1, cart)
  console.log(11, total)

 
  
  return (
    <Context.Provider value={{ cart, unidades, total, onAdd, onRemove, clearCart, getUser,
      userEmail }}>
      {children}
    </Context.Provider>
  );
};

export { CartFuncion, Context };