import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import CartContext from '../context/CartContext'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps, router }) {

  return (
  <>
  <CartProvider>
  <Navbar/>
  <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
    pageInitial: {
      opacity:0,
      x:-200,
    },
    pageAnimate: {
      opacity:1,
      x:0,
      transition: {
        duration:1,
        type:'spring',
        bounce: 0.1,

      }
    }
  }}>
  <Component {...pageProps} />
  
  </motion.div>
  </CartProvider>
  </>
  )
}

export default MyApp
