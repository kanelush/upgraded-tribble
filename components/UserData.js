import axios from 'axios'
import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import CartContext from '../context/CartContext'

export const UserData = () => {
  const { items } = useContext(CartContext)  
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress ] = useState('');
  const [city, setCity] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [isPending, setIsPending] = useState(false);

  const url = 'http://127.0.0.1:8000/api/cart'
  let respo;

  console.log("gogogog---->", items);
  const [data, setData] = useState()
  useEffect( () => {
    axios.get(url)
    .then((resp) => {
      console.log("This is resp GET post to api", resp);
      respo = resp.data
      setData(respo)
      console.log("From const", respo);
  })}, [])
  console.log("data--->", data);
  
  //El state de una variable es alimentado por e.target.value(cada input introducido sera tomado como state actual)
  const handleSubmit = (e) => {
      e.preventDefault()
      
      const datos = {name, mail, description};
      console.log(datos)
      setIsPending(true)
      axios
        .post('https://www.chillin.cl/api/contact', datos)
        .then((resp) => {
        console.log(resp);
        setIsPending(false)
        console.log(isPending)
        
        })
        .catch((err) => {
        console.log(err);
        });
        console.log("added!")
       setName('')
       setMail('')
       setDescription('')
  }
  return (
    <>
    <motion.div className="container columns flex" initial='first' animate='last' variants={{
      first: {
        opacity:0
      },
      last: {
        opacity:1,
        transition: {
          duration:1
        }
      }
    }}>
    
    
    
    <div className="flex w-1/3 pb-10 pt-5 ml-10 rounded-lg bg-gray-500 p-12 mb-12">
    <form onSubmit={handleSubmit}>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Nombre</label>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dirección de envio</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Codigo Postal</label>
        <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    
    
    { !isPending && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button> }
    { isPending && <button disabled type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviando...</button> }
    
    </form>
    
    
    </div>
    <div className='p-20 w-1/3'>
        <h1>Detalles del pedido</h1>
        {items.map((item) =>{
            return(
            <>
            <h1 className=' text-2xl'>{item.name}--{item.price}</h1>
            </>
            )
        })}
        {data && <form className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" method="post" action={data[data.length-1].url}>
                                    <input type="hidden" name="token_ws" value={data[data.length-1].token} />
                                    <input  className="" type="submit" value={`Ir a pagar $${data[data.length-1].total_price}`} />
                                    </form>}
    </div>
        
    </motion.div>
    </>
  )
}