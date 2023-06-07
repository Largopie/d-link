import Header from "@/components/main/header";
import Menu from "@/components/main/menu";
import styled from "styled-components";
import Content from "@pages/content";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8fdff;
`;

const HeaderStyle = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 80px;
  background-color: #048ad7;
`;

const MenuStyle = styled.div`
  position: absolute;
  top: 80px;
  width: 100vw;
  height: 48px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #4E4E4E29;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  z-index: 1;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <HeaderStyle />
      <MenuStyle />
      <SubContainer>
        <Header />
        <Menu />
        <Content />
      </SubContainer>
    </MainContainer>
  );
};

export default MainPage;
