import GlobalStyle from "@/globalStyle"
import styled from 'styled-components'

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
      </div>
    </>
  )
}

export default App
