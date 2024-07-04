import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/Header">Header</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/Productos">Productos</NavLink> 
        <NavLink className={({isActive})=>isActive?'active':''} to="/About">About</NavLink>
        <NavLink className={({isActive})=>isActive?'active':''} to="/Servicios">Servicios</NavLink>
    </nav>
  )
}
