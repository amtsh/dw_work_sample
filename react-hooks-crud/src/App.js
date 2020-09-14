import React, { useEffect } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Products } from "./components/Products";
import { inject } from "mobx-react";
import { useStaticRendering } from "mobx-react";

// useStaticRendering(true);

export const App = inject("productStore")((props) => {
  useEffect(() => {
    console.log("fetching products");
    props.productStore.getProductsAsync();
  });

  return (
    <div className="App">
      <Header />
      <Products productStore={props.productStore} />
      <Footer />
    </div>
  );
});
