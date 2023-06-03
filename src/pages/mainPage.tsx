import Header from "@/components/main/header";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background-color: green;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer/>
    </MainContainer>
  );
};

export default MainPage;