import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'

import Home from '../src/pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Footer } from './components/Footer/Footer'
import { assets } from './assets/assets'
import LogIn from './components/LogIn/LogIn'

function App() {
  
    const [showLogIn,setShowLogIn] = useState(false);
  
  return (
    <>
    {showLogIn ?<LogIn setShowLogIn={setShowLogIn}/> : <></>  }
         <div className='app'>
        <Navbar setShowLogIn = {setShowLogIn}/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>

        </div>
        <Footer assets={assets}/>
    </>
   
  )
}

export default App
