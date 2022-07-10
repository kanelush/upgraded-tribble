import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import axios from 'axios'

export const Table = () => {
    const { items, handleCartInc, handleCartDec, removeHandler  } = useContext(CartContext)
    const totalPrice = items.reduce((total, item) =>{
      return total + item.price * item.quantity
    }, 0)
    const [total, setTotal] = useState()
    const [ data, setData ] = useState()
    const url = 'http://127.0.0.1:8000/api/cart'
    
    useEffect(() => {
     axios.get(url) 
    }, [data]) 
    const options = {
      headers: {
        'content-type': 'application/json'
        },
    }
            
    const handlePay = () => {
      console.log("Go to pay <3");
      setTotal(totalPrice)
      console.log("Total,,,->", total);
      
      if(total) {
        
        axios
        .post(url, {'total_price': totalPrice})
        .then((resp) => {
          console.log("This is resp from next post to api", resp);
        })
        .catch((err) => {
          console.log("Err: ",err.response);
        })
        console.log("added!")
      }
      if(total) {
        axios
        .get(url)
        .then((resp) => {
          console.log("This is resp GET post to api", resp);
          setData(resp.data)
          // const data = resp.data
          // console.log("This is data GET to api", Object.values(data)[data.length - 1]);
          // console.log("Log DAta.----->", Object.values(data)[0].url);
          // console.log("Log DAta TOKEN.----->", Object.values(data)[0].url);
          // window.location.href = Object.values(data)[0].url;
          
        })
        .catch((err) => {
          console.log("Err: ",err.response);
        })

      }
      
    }
      
    

  return (
    <div>
        <table>
            {/* <tbody>
        <tr>
        <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
        {items.map((item) => {
          return (
            <tr>
                <td><img height="90" width="90" alt="ecommerce" className="hover:scale-105 transition-all rounded border border-gray-200" src={`http://127.0.0.1:8000${item.image}`} /></td>
              <td className='p-2 text-2xl'>{item.name}</td>
              <td className='p-2 text-2xl ml-40'>{item.quantity}</td>
              <td className='p-2 text-2xl'>${item.price}</td>
              <td className='p-2 text-2xl'>${item.quantity*item.price}</td>
              
              <td><button className={`px-4 bg-emerald-300 rounded-lg`} onClick={() => handleCartInc(item)}>+</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => handleCartDec(item)}>-</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => removeHandler(item)}>X</button></td>
            </tr>
            
          )
        })}
        
        { totalPrice ? <tr className='p-2 text-2xl'>${totalPrice} </tr> : <tr className='p-2 text-2xl'>Tu carro esta vacio </tr>  } 
        
        </tbody> */}
        { totalPrice > 0 ?

         <tbody>
           <tr>
        <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
        {items.map((item) => {
          return (
            <tr key={item.id}>
                <td><img height="90" width="90" alt="ecommerce" className="hover:scale-105 transition-all rounded border border-gray-200" src={`http://127.0.0.1:8000${item.image}`} /></td>
              <td  className='p-2 text-2xl'>{item.name}</td>
              <td className='p-2 text-2xl ml-40'>{item.quantity}</td>
              <td className='p-2 text-2xl'>${item.price}</td>
              <td className='p-2 text-2xl'>${item.quantity*item.price}</td>
              
              <td><button className={`px-4 bg-emerald-300 rounded-lg`} onClick={() => handleCartInc(item)}>+</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => handleCartDec(item)}>-</button></td>
        <td><button className='px-4 bg-red-300 rounded-lg' onClick={() => removeHandler(item)}>X</button></td>
            </tr>
            
          )
        })}
        
      <tr className='mx-20 p-2 text-2xl'>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td className='p-2 text-2xl'></td>
      <td onChange={(e) => {}} className='p-2 text-2xl'>${totalPrice}</td>
      <td className='cursor-pointer bg-emerald-500 rounded-lg px-4' onClick={(e) => handlePay()}> Ir a pagar </td>
      
      </tr>
        </tbody>
        
        :
        <tbody>

<tr className='p-2 text-2xl'>Tu carro esta vacio </tr>
        </tbody>
      }
      </table>
      {data && <form className="flex ml-auto text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" method="post" action={data[data.length - 1].url}>
                                    <input type="hidden" name="token_ws" value={totalPrice} />
                                    <input  className="" type="submit" value={`Ir a pagar $${totalPrice}`} />
                                    </form>}
    </div>
  )
}
