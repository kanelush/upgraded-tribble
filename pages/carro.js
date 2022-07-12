import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import Link from 'next/link'
import { Table } from '../components/Table'
import { UserData } from '../components/UserData'


//Carro Page component> 
const Carro = () => {
  const { quanty,handleCartInc, handleCartDec, items, quantity, sumArr, removeHandler } = useContext(CartContext)

  //Sum of the prices of all the items inside the cart.
  const totalPrice = items.reduce((total, item) =>{
    return total + item.price * item.quantity
  }, 0)
  
  return (
    <>
    <div className="container bg-slate-200 py-20">
        <Table/>
       </div>
    </>

  )
}

export default Carro;