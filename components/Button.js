import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

export const Button = ({producto}) => {
    const { addToCart } = useContext(CartContext)

  return (
    <button className={`bg-yellow-500`} onClick={() => addToCart(producto) }>Añadir al carrito</button>
  )
}
