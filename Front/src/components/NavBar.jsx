import './navbar.css'
export const NavBar=()=>{
  return(
    <div className="container">
      <div className="logo">
        🌑🌒🌓🌔🌕🌖🌗🌘
      </div>
      <input className='search' type="text" placeholder="Celulares, Buzos, Zapatillas ..." />
      <div className="user">
        <div className="div-icon">
          <button className='icon'>

          👤
          </button>
          </div>
<span>Mi cuenta</span>
      </div>
      <div className="cart">
        <button>

        🛒
        </button>
      </div>
    </div>
  )
}