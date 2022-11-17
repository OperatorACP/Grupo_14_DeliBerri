import React, { useEffect, useState } from "react";

import "./LastProductInDb.css";

function LastProductInDb() {
  const [lastProduct, setLastProduct] = useState({});
  const [lastProductImage, setLastProductImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/products/lastproduct")
      .then((response) => response.json())
      .then((product) => {
                 console.log(product);
        setLastProduct(product.product);
        setLastProductImage(product.product.image);
      });
  },[] );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último Producto en DB
          </h5>
        </div>
        {lastProduct.length === 0 ? ( 
          <div className="card-body">
            <div className={`lds-dual-ring-lastproduct`}></div>
          </div>
        ) : (
          <div className="card-body">
            <div className="text-center">
              { <img className="img-fluid px-2 px-sm-2 mt-2 mb-4" style={{width: 18 +'rem'}} src={lastProductImage} alt="Last Product in Data Base"/> }
            </div>
            <h3>{lastProduct.title}</h3>
            <p>{lastProduct.description}</p>
            <h5>{lastProduct.price}</h5>
            {/* { <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a> } */}
          </div>
        )}
      </div>
    </div>
  );
}

export default LastProductInDb;
