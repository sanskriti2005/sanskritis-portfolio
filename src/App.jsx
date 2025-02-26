import { Container } from "@chakra-ui/react";
import React from "react";
import Content from "./components/Main";

const App = () => {
  return (
    <div>
      <Container className="dark" fluid width={400}>
        <Content />
      </Container>
    </div>
  );
};

export default App;
