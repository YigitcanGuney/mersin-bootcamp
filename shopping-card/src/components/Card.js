import { useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  useParams,
} from "react-router-dom";


function Card({ products }) {

  // linkten gelen id parametresi çekildi
  let { id } = useParams()



  return (
    <div className="container mt-5">

       {/* gelen id ye göre filtreleme yapılıp bilgiler yazıldı */}
      {
        products.products.map(item => (

          id == item.id &&
          <div className="row">
            <div className="col-sm-6" style={{ maxHeight: "400px" }, { overflow: "hidden" }}>
              <img style={{ height: "350px" }, { objectFit: "fill" }} src={item.img} alt="product_img" className="w-100" />
            </div>
            <div className="col-sm-6">
              <div className="card pb-5">
                  <div className="card-body">
                  <h5 className="card-title fs-2">{item.name}</h5>
                  <h6 className="card-subtitle mb-5 text-muted fs-4">{`${item.price} TL`}</h6>
                  <p className="card-text mb-5" style={{marginRight:"200px",fontSize:"1rem"}}>{item.description}</p>
                  <Link  className="pay-button" to={`/pay/${item.id}`}> Add to Card - {item.price} TL</Link>
                  </div>
              </div>
            </div>
          </div>
        )

        )
      }




    </div>
  )
}

export default Card
