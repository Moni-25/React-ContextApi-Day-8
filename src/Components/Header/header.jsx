import { useContext } from "react";
import { cartContext } from "../../Contexts/cartContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  
  const { cartItems = [] } = useContext(cartContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/home" style={{color: "white", fontWeight: "bold"}}>
          React Context Task Buy Online Shopping
        </Link>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent: "flex-end"}}>
          <Link to="/home">
            <button className="btn btn-outline-dark" type="submit">
            <i class="bi bi-house-fill"></i><span style={{marginLeft : "8px"}}>Home</span>
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-outline-dark" type="submit" style={{marginLeft:"20px"}}>
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}