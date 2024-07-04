import './App.css'
import { NavBar } from './components/NavBar'

import { Products } from './components/Products'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path="/" element={<Products />} />
    {/* <Route path="/productos" element={<Products />} /> */}
    </Routes>
    
</BrowserRouter>
   </>
  )
}

export default App
