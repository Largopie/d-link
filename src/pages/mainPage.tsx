import Header from "@/components/main/header";
import Menu from "@/components/main/menu";
import styled from "styled-components";
import Content from "@pages/content";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F8FDFF;
`;



const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Menu />
      <Content />
    </MainContainer>
  );
};

export default MainPage;