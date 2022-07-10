import React, { useContext, useState } from 'react'
import { gsap }  from "gsap";
import Link from "next/link"
import { useRouter } from 'next/router'
import Image from 'next/image';
import { state } from '../state';
import { useSnapshot } from 'valtio';
import CartContext from '../context/CartContext';
import Cart from './Cart';
export const Navbar = () => {
const { items, clicked, setClicked } = useContext(CartContext)
const { counter } = useContext(CartContext)
const [Turnonn , setTurnonn] = useState(false)
gsap.registerPlugin();
function efecto(){
  gsap.from(".hidden", {opacity:0, duration:0.3, ease: "circ.in"})
 
  setTurnonn(!Turnonn)
}
return (
  
  <>
  <nav className="z-40 sticky top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  mb-26">
<div className="container flex flex-wrap justify-between items-center mx-auto">
  <Link href="/">
  <a className="cursor-pointer flex items-center">
      <Image width="50px" height="50px" src="/xd.png" className="mr-3 h-6 sm:h-9" alt="logo" />
      <span className="self-center text-2xl  whitespace-nowrap font-bold mx-auto">@myweb</span>
  </a>
  </Link>
  <button onClick={() => efecto()} data-collapse-toggle="mobile-menu" type="button" className="transition-all inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    <svg  className={`${Turnonn ? 'hidden' : ''} w-6 h-6 xd`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    <svg className={`${Turnonn ? '' : 'hidden'} w-6 h-6 xd`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  </button>
  <div  className={`${Turnonn ? '' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <Link href="/">
        <a href="" onClick={() => setTurnonn(false)} className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Inicio</a>
      </Link>
      <Link href="/servicios">
        <a href="" onClick={() => setTurnonn(false)} className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Servicio</a>
      </Link>
      <Link href="/contact">
        <a href="" onClick={() => setTurnonn(false)} className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Contacto</a>
      </Link>
      {/* <span>{state.pedido}</span> */}
      
      {/* <span className={`bg-emerald-600 ${ clicked ? 'hidden': ''}`} onClick ={() => {setClicked(!clicked)}}>
        xd
      </span> */}
  
  <tspan className={`cursor-pointer `} onClick ={() => {setClicked(!clicked)}} style={{display:'inline-block'}}>{items.length}
  <svg style={{display:'inline-block'}}xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16"> <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>

  </svg>
    <Cart/>
  </tspan>

    </ul>
  </div>
  
</div>
</nav>
  </>
    )
}
