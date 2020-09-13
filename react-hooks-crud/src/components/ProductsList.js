import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";
// import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveProducts();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveProduct = (product, index) => {
    setCurrentProduct(product);
    setCurrentIndex(index);
  };

  const findByName = () => {
    ProductDataService.findByName(searchName)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Products List</h4>

        <ul className="list-group">
          {products &&
            products.map((product, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveProduct(product, index)}
                key={index}
              >
                {product.id}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentProduct ? (
          <div>
            <h4>Product</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentProduct.name}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentProduct.description}
            </div>
            <div>
              <label>
                <strong>Price:</strong>
              </label>{" "}
              {currentProduct.price}
            </div>
            <div>
              <label>
                <strong>Color:</strong>
              </label>{" "}
              {currentProduct.color}
            </div>
            <div>
              <label>
                <strong>Size:</strong>
              </label>{" "}
              {currentProduct.size}
            </div>
            <div>
              <label>
                <strong>Tax Included:</strong>
              </label>{" "}
              {currentProduct.taxIncluded ? "Tax Included" : "Before Tax"}
            </div>
            <div>
              <label>
                <strong>Free Shipping:</strong>
              </label>{" "}
              {currentProduct.freeShipping ? "Free Shipping" : "Paid Shipping"}
            </div>
            <div>
              <label>
                <strong>Prepaid Only:</strong>
              </label>{" "}
              {currentProduct.prepaidOnly
                ? "Prepaid Only"
                : "Postpaid Accepted"}
            </div>
            <div>
              <label>
                <strong>Asset Ids:</strong>
              </label>{" "}
              {currentProduct.assetIds}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Product...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
