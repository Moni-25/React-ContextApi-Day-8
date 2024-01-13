import { useContext } from "react";
import NavBar from "../../Components/Header/header";
import { cartContext } from "../../Contexts/cartContext";
import Quantity from "../../Components/CartQuantity/quantity";
import {Link} from "react-router-dom"

export default function Cart()
{
    const {cartItems = []} = useContext(cartContext)
    const len = cartItems.length;
    console.log(len)
    return(
        <>
            <NavBar/>
            {len !== 0 ? 
                <div className="cart-item" style={{marginLeft: "20%"}}>
                    {cartItems.map((cartVal) => <Quantity cartVal={cartVal}/>)}
                </div>
            : 
            <div className="card mt-5" style={{width: "400px", marginLeft: "35%"}}>
                <div className="card-header text-center">
                    <h4 style={{color: "red"}}>Card Empty!!!</h4>
                </div>
                <div className="card-body">
                    <p>Can you go to home page </p>
                    <p>kinldy click on the home button</p>
                    <Link to="/home">
                        <button className="btn btn-primary">
                        <i class="bi bi-house-fill"></i><span style={{marginLeft : "10px"}}>Home</span>
                        </button>
                    </Link>
                </div>
            </div>
            }
        </>
    )
}