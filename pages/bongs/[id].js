import { useContext, useState } from 'react';
import Link from 'next/link';
import { ContactData } from '../../components/ContactData';
import { Navbar } from '../../components/Navbar';
import Cart from '../../components/Cart';
import { useSnapshot } from 'valtio';
import { addtuCart, state } from '../../state';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';
import { CartProvider } from '../../context/CartContext';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';

//dynamic id, add quantity button, multiply by price, push to cart, handeclick function
export const getStaticPaths = async () => {
      const res = await fetch('https://chillin.cl/api/productos');
      const data = await res.json();
      console.log("Data: ", data);
      
      const paths = data.map(producto => {
          return {
              params: { id: producto.id.toString()}
          }
      })
      return {
          paths,
          fallback: false,
      }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://chillin.cl/api/productos/' + id);
    const data = await res.json()
    // const res_image = await fetch('https://chillin.cl/api/productos-images/sorted/'+ id);
    // const data_img = await res_image.json();
    // console.log("This--->", data_img);

    return {
        props: {
            producto: data,
            // producto_img: data_img
        }
    }
}
const SingleNegocioPage = ({ producto }) => {
  const { addToCart, handleDecrement, handleIncrement, quantity, setQuantity } = useContext(CartContext)
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(producto.price)
 

  const [show, setShow] = useState(false);

  //agregar to cantidad
  
  function agregarOne(e){
    setShow(true)
    setQuantity(1)
  }
    return(
    <>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    
    <h1 className='text-2xl'>xd</h1>
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="hover:scale-105 transition-all lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`https://chillin.cl/${producto.image}`} />
      
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">bongasos.cl</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{ producto.name }</h1>
        <div className="flex mb-4 ">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
            <h1 className='text-2xl'>{state.carrito}</h1>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{ producto.description }</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <button className={`${ show ? 'hidden' : ''} px-4 bg-emerald-300 rounded-lg`} onClick={() => agregarOne()}>Agregar</button>
        <div className={`flex ${ show ? '' : 'hidden'}`}>
        <span className="title-font font-medium text-2xl text-gray-900 ">Q:{ quantity }</span>
        
        <button className={`px-4 bg-emerald-300 rounded-lg ${show ? '' : 'hidden'}`} onClick={() => handleIncrement()}>+</button>
        <button className='px-4 bg-red-300 rounded-lg' onClick={() => {handleDecrement()}}>-</button>
          <span className="title-font font-medium text-2xl text-gray-900">| ${ producto.price * quantity }</span>
          <button className={`bg-yellow-500`} onClick={() => addToCart(producto, quantity) }>A??adir al carrito</button>
          {/* <button className={`bg-yellow-500`} onClick={() => addToCart(producto) }>A??adir al carrito</button> */}
          <form className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" method="post" action={producto.url}>
                                    <input type="hidden" name="token_ws" value={producto.token} />
                                    <input  className="" type="submit" value={`Ir a pagar $${price * counter}`} />
                                    </form>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* {producto_img.map(img => {return <img key={img.id} alt="ecommerce" className="bg-slate-600 hover:bg-sky-700 hover:scale-105 transition-all p-8 lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`http://127.0.0.1:8000${img.image}`} />})} */}
      {/* <Cart carr={carr} setCarr={setCarr} /> */}
      {/* <Cart/> */}
    </div>
    <ContactData/>
  </div>
  
    
</section>

      </>
    )

}

export default SingleNegocioPage;