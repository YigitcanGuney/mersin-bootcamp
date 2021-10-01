import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    useParams,
} from "react-router-dom";

function Pay({ products }) {

    // linkten gelen id parametresi çekildi
    let { id } = useParams();
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="fw-bold my-3"> Your Cart</h3>
                            <p>Not Ready to checkout? Continue Shopping</p>
                        </div>
                        {/* parametreden çektiğimiz id değerine göre veri çekildi  */}
                        {
                            
                            products.products.map(item => (
                                id == item.id &&
                                <>
                                    <div className="row border-style mb-5  pb-5">
                                        <div className="col-sm-3" style={{ overflow: "fill", height: "100px" }}>
                                            <img style={{ height: "150px" }} className="w-100 border border-2" src={item.img} />
                                        </div>
                                        <div className="col-sm-9 " >
                                            <h6>{item.name}</h6>
                                            <p style={{ fontSize: "0.8rem" }}>{`Size : ${item.size}`}</p>
                                            <p style={{ fontSize: "0.8rem" }}>{`Quantity : 1`}</p>
                                            <div className="d-flex justify-content-between">
                                                <span className="fw-bold fs-5">{`${item.price} TL`}</span>
                                                <span style={{ fontSize: "0.8rem" }} className="mt-2  border-style">Remove</span>
                                            </div>
                                        </div>

                                    </div>
                                  
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="col-sm-6">
                    {
                        products.products.map(item => (
                            id == item.id &&
                            <>
                                <h3 className="fs-5 fw-bold mt-5">Order Summary</h3>
                                <input className="mt-4 p-2 w-100" placeholder="Enter coupon code here" type="text" />
                                <div className="d-flex justify-content-between mt-5 fw-bold">
                                    <span>Subtotal</span>
                                    <span>{`${item.price} TL`}</span>
                                </div>
                                <div className="d-flex justify-content-between mt-2 border-pay pb-3">
                                    <span className="fw-bold">Shipping</span>
                                    <span style={{color: "rgb(146, 146, 146)"}} className=" fw-bold">Calculated at the next step</span>
                                </div>

                                <div className="d-flex justify-content-between mt-2  pb-3">
                                    <span className="fw-bold">Total</span>
                                    <span className=" fw-bold">{`${item.price} TL`}</span>
                                </div>
                                <Link to="/login" className="check-button mt-3">
                                    Continue to checkout</Link>


                            </>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Pay
