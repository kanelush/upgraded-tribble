import React from 'react'
import { useEffect, useContext } from 'react';
import CartContext from '../context/CartContext';
import axios from 'axios';

const Success = () => {

  const { items } = useContext(CartContext)
  console.log("items in success--->", items);
    // buy order, success message
    let gourl = 'http://127.0.0.1:8000/api/tokens'
    let token_ws;
    useEffect(() => {
        var url = window.location;
        token_ws = new URLSearchParams(url.search).get('token_ws');
        console.log("token ws did i get it? im proud of you <3 love you: ", token_ws);
        
        axios
        .post(gourl, {token_ws}
          )
        .then((resp) => {
        console.log("Que es esto",resp);
        
        })
        .catch((err) => {
        console.log(err);
        });
        console.log("added!")
        
        
    
    }, [])
  return (
    <div>success</div>
  )
}

export default Success;