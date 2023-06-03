import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #4E4E4E29;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

const ExDiv = styled.div`
  width: max-content;
  height: 20px;
`;

const Menu = () => {
  return(
    <MainContainer>
      <SubContainer>
        <ExDiv>1</ExDiv>
        <ExDiv>공지사항</ExDiv>
        <ExDiv>수업</ExDiv>
        <ExDiv>생활</ExDiv>
        <ExDiv>동아리</ExDiv>
        <ExDiv>근로</ExDiv>
        <ExDiv>서치바--------</ExDiv>
      </SubContainer>
    </MainContainer>
  );
}

export default Menu;