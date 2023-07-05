import React from "react";
import { Globalstyle } from "./Components/Globalstyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";



function App() {
  return (
    
    <ThemeProvider theme={temaEscuro}>
      <Globalstyle/>
      <Cabecalho />
      <Container />
    </ThemeProvider>
   
  );
}

export default App;
