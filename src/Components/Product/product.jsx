import { useContext } from "react"
import { cartContext } from "../../Contexts/cartContext"

export default function Product({productVal = {}, handleCart = () => {}})
{
    const {cartItems = []} = useContext(cartContext)
    const isDisabled = cartItems.filter((items) => 
                                            items.id === productVal.id).length > 0 ? true: false;

    // Rating function
    function renderRatings(rate = 0) {
        let ratingsNode = [];
        for (let i = 0; i < rate; i++) {
          ratingsNode.push(<div className="bi-star-fill"></div>);
        }
        return ratingsNode;
    }
    return(
        <>
            <div className="card mt-3 mx-4" style={{borderRadius: "15px"}}>
                <div className="badge bg-dark text-white position-absolute"
                    style={{
                        top: "0.5rem",
                        right: "0.5rem",
                    }}
                >
                    Sale
                </div>

                <img className="card-img-top mt-5" src={productVal.img} alt="...Alternate" 
                    width="180px" height="200px"/>

                <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-300">{productVal.title}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="d-flex">{renderRatings(productVal.ratings)}</div>
                            {/* <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div> */}
                    </div>
                    <div style={{marginLeft : "5px", color: "black", fontWeight: "700"}}>
                            Rating: {productVal.rating}
                    </div>
                    <button type="button" class="btn btn-sm btn-primary mt-2" data-toggle="popover" title={productVal.description}>
                        Description
                    </button>
                    {/* <div className="text-muted text-decoration-line-through">
                        Price ${productVal.price}
                    </div> */}
                    <div className="price mt-2" style={{fontWeight: "bold", color: "black"}}>
                        <span>Price:  ${productVal.price}</span>
                    </div>
                    <div className="price mt-2" style={{color: "rgb(190, 43, 63)", fontWeight: "bold"}}>
                        <span>Discount:  {productVal.discountPercentage}%</span>
                    </div>
                </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button className="btn btn-outline-dark"
                                onClick={() => handleCart(productVal)} disabled={isDisabled}>
                            {isDisabled ? "Remove From Cart" : "Add To Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}