import { useContext } from "react"
import { CartContent } from "../store"


export default function Navbar() {
  const [state] = useContext(CartContent);

  return (<nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <span className="navbar-brand">甜點蛋糕店</span>
      <button className="btn btn-outline-dark position-relative" type="button">
        購物車
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">{state.cartList.length}</span>
      </button>
    </div>
  </nav>)
}