import { useContext, useState } from "react";
import NavBar from "../../Components/Header/header";
import Product from "../../Components/Product/product";
import { cartContext } from "../../Contexts/cartContext";
// import dataProduct from "../../../public/product.json"
import dataProducts from "../../../src/assets/products.json"

export default function Home()
{    
    //const [product, setProducts] = useState();
    const {cartItems = [], updateCart = () => {}} = useContext(cartContext)
    const [products, setProducts] = useState(dataProducts);

    console.log(products)
    function handleCart(data = {}){
        let cartCopy = [...cartItems]
        cartCopy.push({...data, quantity: 1})
        updateCart(cartCopy)
    }
    console.log("cart", cartItems)
    return(
        <>
            <NavBar/>
            <div className="product-list" style={{display: "flex", justifyContent: "center"}}>
            {products.data.map((val, index) => 
                <Product
                    key={`${val.name}-${index}`}
                    productVal={val}
                    handleCart={handleCart}
                />
            )}
            </div>
        </>
    )
}