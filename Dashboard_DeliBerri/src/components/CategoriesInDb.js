import React, {useEffect, useState} from "react";

function CategoriesInDb() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {

     fetch("http://localhost:3001/api/products/categories")
       .then(response => response.json())
       .then(products => {
         setCategories(products.categories);
       })

  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías: ID en DB
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories &&

              categories.map((category, i) => {
                return(
                  <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{`${category.name}: ${category.id}`}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
