import { useState } from "react"

export default function Quantity({cartVal = {}}){
    const [quantity, setQuantity] = useState(1);
    console.log(quantity)
    return(
        <>
            <div className="card mt-4 mx-5" style={{borderRadius: "15px", width: "700px", height: "480px"}}>
                <div className="card-header" style={{height: "270px"}}>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <img src={cartVal.img} alt="" width="180px" height="250px"/>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <h5>{cartVal.title}</h5>
                            <div className="card">
                                <div className="card-header">Description</div>
                                <div className="card-body">{cartVal.description}</div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <select className="form-select" style={{width: "60px"}}
                                value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-2" style={{textAlign: "center"}}>
                            ${cartVal.price}
                        </div>
                    </div>
                </div>

                <div className="card-body mx-3">
                    <div className="mt-3 row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 col-md-6">
                            <h6>SUBTOTAL</h6>
                        </div>
                        <div className="col-lg-4 col-md-3" style={{textAlign: "end"}}>
                            ${cartVal.price}
                        </div>
                    </div>
                    <div className="mt-3 row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 col-md-6">
                            <h6>SHIPPING</h6>
                        </div>
                        <div className="col-lg-4 col-md-3" style={{textAlign: "end"}}>FREE</div>
                    </div>
                    <div className="mt-3 row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 col-md-6">
                            <h6>Total Quantity</h6>
                        </div>
                        <div className="col-lg-4 col-md-3" style={{textAlign: "end"}}>
                            {quantity}
                        </div>
                    </div>
                </div>

                <div className="card-footer mx-3">
                    <div className="row mb-3 mt-2">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-7 col-md-6">
                            <h5>Total</h5>
                        </div>
                        <div className="col-lg-4 col-md-3" style={{textAlign: "end"}}>${(quantity * cartVal.price).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}