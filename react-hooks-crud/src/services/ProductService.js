import http from "../http-common";

const getAll = () => {
  return http.get("/products");
};

const get = (id) => {
  return http.get(`/products/${id}`);
};

const create = (data) => {
  return http.post("/products", data);
};

const findByName = (name) => {
  return http.get(`/products?name=${name}`);
};

export default {
  getAll,
  get,
  create,
  findByName,
};
