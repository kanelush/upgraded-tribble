import { useState } from "react";
import { proxy } from "valtio";

const state = proxy({
    cuenta: 1,
    carrito: [],
    tist:[],
    arr: [],
    price: [],
    setCarrito(arg) {
        let myTarget = JSON.parse(JSON.stringify(arg));
        state.carrito = myTarget['name'].concat(myTarget['price'])
        state.carrito = 
        
        console.log("------carro--->", state.carrito);
        if (state.carrito){
            Object.values(state.carrito).map((obj) => {
                console.log("xdAsda---->",obj );
                return obj
            })
        }


    },
    

        
        // state.carto = () => state.carto.push(producto)
        // console.log("this---->",state.carto);
    setXw (producto) {
        producto = JSON.stringify(producto)
        state.carto = this.carto.concat(producto)
        console.log("pasa algo", state.carto)
    },
    
   


})


const addtuCart = (el) => {
    const [carro, setCarr] = useState(carro)
    
    setCarr(...carr, el)
    console.log(carro);
}
export {addtuCart}
export { state }