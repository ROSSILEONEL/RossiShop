import './App.css'
import { Menu } from './components/Menu'
import { NavBar } from './components/NavBar'
import { Products } from './components/Products'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Menu />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/cart' element={<Cart/>} />
    {/* <Route path="/productos" element={<Products />} /> */}
    </Routes>
    
</BrowserRouter>
   </>
  )
}

export default App
