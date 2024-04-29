import { useContext } from "react"
import { CartContent } from "../store"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [state] = useContext(CartContent);

  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">甜點蛋糕店</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className='nav-link'
              style={({ isActive }) => {
                return {
                  color: isActive ? '#2a5696' : ''
                }
              }}
              to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/album'>Album</NavLink>
          </li>
        </ul>
        <button className="btn btn-outline-dark position-relative" type="button">
          購物車
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span>
        </button>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>)
}


