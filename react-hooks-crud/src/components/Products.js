import React from "react";
import { observer } from "mobx-react";
import { ProductItem } from "./ProductItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px 5%;
  justify-content: center;
`;

export const Products = observer(({ productStore }) => {
  const products = productStore.products;

  return (
    <Container>
      {products.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </Container>
  );
});
