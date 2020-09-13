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
};

export default Product;
