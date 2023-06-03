import Header from "@/components/main/header";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
};

export default MainPage;