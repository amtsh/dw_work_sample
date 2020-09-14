import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 5px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;

const ImageContainer = styled.div`
  height: auto;
  width: 20rem;
  margin-bottom: 20px;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Item = styled.div`
  padding: 5px;
`;

export const ProductItem = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Img src={props.product.product_image} alt="alt text here" />
      </ImageContainer>
      <Item>{props.product.product_title}</Item>
      <Item>{props.product.product_price}</Item>
    </Container>
  );
};
