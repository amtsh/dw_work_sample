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

const Item = styled.div`
  display: inline;
  padding: 0 10px;
`;

export const Footer = (props) => {
  return (
    <Container>
      <ContainerItem>
        <Item>
          <a
            style={{ color: "white" }}
            href="https://github.com/sukeshni/dw_work_sample"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project by @sukeshnik
          </a>
        </Item>
      </ContainerItem>
    </Container>
  );
};
