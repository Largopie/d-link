import GlobalStyle from "@/globalStyle";
import styled from "styled-components";
import { Counter } from "./pages/counter";

const H1 = styled.h1`
  color: purple;
  background-color: red;
  font-size: 1.5em;
  font-weight: bold;
`;

const App = () => {
  return (
    <>
      <div>
        <GlobalStyle />
        <H1>App Page</H1>
        <Counter />
      </div>
    </>
  );
};

export default App;
