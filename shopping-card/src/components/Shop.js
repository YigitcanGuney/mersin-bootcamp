import { useState, useEffect } from 'react'
import Card from './Card'
import Home from './Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory,
    useLocation
} from "react-router-dom";




function Shop({ products }) {
    const [categories, setCategories] = useState();

    useEffect(async () => {
        const response = await fetch("https://api.npoint.io/6e47eb0c77bfff5b9c52")
        const data = await response.json();
        return setCategories(data.categories);
    }, [])




    return (
        <>
            <div className="shop-header bg-dark py-5 text-light">
                <div className="container my-3">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Shop's Men</h2>
                        </div>
                        <div className="col-sm-5 mt-2">
                            <p>Revamp your style with the latest designer trends in men's clothing or archieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-sm-4">
                        <ul className="list-group">
                            <li className="list-group-item fw-bold mb-3 fs-4">
                                Filters <a className="text-muted fs-6" href="#">Clear Filters</a>
                            </li>
                            <li className="list-group-item fw-bold fs-6 mb-3"> Categories</li>
                            <li className="list-group-item">
                                <label id="Jackets" class="checkbox-container">Jackets
                                    <input type="checkbox" id="Jackets" name="Jackets" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item">
                                <label id="Fleece" class="checkbox-container">Fleece
                                    <input type="checkbox" id="Fleece" name="Fleece" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item">
                                <label id="Hoodies" class="checkbox-container">Sweater&Hoodies
                                    <input type="checkbox" id="Hoodies" name="Hoodies" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item">
                                <label id="Shirts" class="checkbox-container">Shirts
                                    <input type="checkbox" id="Shirts" name="Shirts" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item">
                                <label id="Tshirts" class="checkbox-container">T-shirts
                                    <input type="checkbox" id="Tshirts" name="Tshirts" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            <li className="list-group-item">
                                <label id="Pants" class="checkbox-container">Pants&Jeans
                                    <input type="checkbox" id="Pants" name="Pants" />
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                            

                        </ul>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 text-end mb-5">
                                <a href="#" className="btn btn-outline-dark">
                                    Sort By : <span className="fw-bold">Populer </span>
                                </a>
                            </div>
                            {/* App js dosyasında çektiğimiz fetch verisini buraya aktarılıp tüm ürünlerin listelenmesi yapıldı */}
                            {

                                products.products.map(item => (

                                    <div key={item.id} className="col-sm-4 my-2 mx-height mb-5">
                                        <div className="card">
                                            <Link to={`/card/${item.id}`}> <img src={`${item.img}`} className="card-img-top" alt="product-img" /> </Link>

                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text"> {item.description.length >= 24 ? `${item.description.substring(0, 24)}...` : item.description} </p>
                                                <p className="card-text"> {`${item.price} TL`} </p>
                                            </div>
                                        </div>

                                    </div>

                                ))


                            }




                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}



export default Shop
