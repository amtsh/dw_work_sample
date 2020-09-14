import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { Provider } from "mobx-react";
import { ProductStore } from "./stores/ProductStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider productStore={new ProductStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
