import { Container } from "@chakra-ui/react";
import React from "react";
import Content from "./components/Content";

const App = () => {
  return (
    <div>
      <Container className="dark" fluid width={700}>
        <Content />
      </Container>
    </div>
  );
};

export default App;
