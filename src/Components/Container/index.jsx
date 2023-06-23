import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import styled from "styled-components";

const Container = styled.div`
background-color: #f1f1f1;
min-height: 90vh;
padding: 0px 15vw;
`;
const Conteudo = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export default () => {
  return (
    <Container>
      <Titulo>Olá Fulanoo!</Titulo>
      <Conteudo>
        <Conta />
      </Conteudo>
    </Container>
  );
};


