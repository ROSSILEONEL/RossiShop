import { NavLink } from "react-router-dom"

export const Menu = () => {
  return (
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/header">Header</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/products">Productos</NavLink> 
        <NavLink className={({isActive})=>isActive?'active':''} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/services">Servicios</NavLink>
    </nav>
  )
}
