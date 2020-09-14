import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  display: flex;
  background-color: black;
  color: white;
`;

const ContainerItem = styled.div`
  display: inline-block;
  margin: 0 5px;
  padding: 20px 10px;
`;

const ContainerItemMiddle = styled(ContainerItem)`
  flex-grow: 3;
  text-align: center;
`;

const Item = styled.div`
  display: inline;
  padding: 0 10px;
  text-transform: uppercase;
`;

export const Header = (props) => {
  return (
    <Container>
      <ContainerItem>DW</ContainerItem>
      <ContainerItemMiddle>
        <Item>New</Item>
        <Item>All Watches</Item>
        <Item>Accessories</Item>
        <Item>Accessories</Item>
        <Item>Gift Cards</Item>
        <Item>Store Locations</Item>
      </ContainerItemMiddle>
      <ContainerItem>Cart</ContainerItem>
    </Container>
  );
};
