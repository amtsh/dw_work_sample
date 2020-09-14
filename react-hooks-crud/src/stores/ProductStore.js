import { observable, runInAction, action, decorate } from "mobx";
import { RequestService } from "../request";

export class ProductStore {
  constructor() {
    this.requestService = new RequestService();
  }
  products = [];
  status = "initial";

  addProduct(product) {
    this.products.push(product);
  }

  async formatProduct(product) {
    return {
      product_id: product.id,
      product_title: product.name,
      product_description: product.description,
      product_price: product.price,
      product_image:
        product.assetIds !== null
          ? (await this.requestService.get(`/assets/${product.assetIds[0]}`))
              .url
          : "",
    };
  }

  getProductsAsync = async () => {
    try {
      var params = {};
      const urlParams = new URLSearchParams(Object.entries(params));
      const productIds = await this.requestService.get("/products", urlParams);
      const products = productIds
        .slice(0, 10)
        .map(
          async ({ id }) =>
            await this.formatProduct(
              await this.requestService.get(`/products/${id}`, urlParams)
            )
        );
      runInAction(() => {
        products.map((product) =>
          product.then((response) => this.addProduct(response))
        );
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

decorate(ProductStore, {
  products: observable,
  addProduct: action,
});
