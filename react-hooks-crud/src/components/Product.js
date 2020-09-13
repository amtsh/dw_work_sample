import React, { useState, useEffect } from "react";
import ProductDataService from "../services/ProductService";

const Product = (props) => {
  const initialProductState = {
    id: null,
    name: "",
    description: "",
    price: 0,
    color: "",
    size: "",
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = (id) => {
    ProductDataService.get(id)
      .then((response) => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
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
            {currentProduct.prepaidOnly ? "Prepaid Only" : "Postpaid Accepted"}
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
  );
};

export default Product;
