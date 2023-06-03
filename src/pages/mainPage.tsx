import Header from "@/components/main/header";
import Menu from "@/components/main/menu";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 960px;
  height: calc(100% - 128px);
  margin: 0 auto;
  background-color: green;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Menu />
      <ContentContainer/>
    </MainContainer>
  );
};

export default MainPage;