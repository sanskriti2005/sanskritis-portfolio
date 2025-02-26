import { Container } from "@chakra-ui/react";
import React from "react";
import Content from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Container className="dark" width={400} fluid margin={"100px auto"}>
        <Content />
      </Container>
    </div>
  );
};

export default App;

