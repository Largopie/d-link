import styled from "styled-components";
import { FiAlignJustify, FiSearch } from "react-icons/fi";

const MainContainer = styled.div`
  width: 100%;
  height: 48px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ExDiv = styled.div`
  width: max-content;
`;

const Input = styled.input`
  border-bottom: 1px solid #9D9D9D;
  width: 200px;
`;

const Submit = styled.button`
  padding: 0px;
  :hover {
    cursor: pointer;
  }
`;

const MenuBtn = styled.button`
  :hover {
    cursor: pointer;
  }
`;

const Menu = () => {
  return (
    <MainContainer>
      <SubContainer>
        <ExDiv>
          <MenuBtn>
            <FiAlignJustify size="20px" />
          </MenuBtn>
        </ExDiv>
        <ExDiv>공지사항</ExDiv>
        <ExDiv>수업</ExDiv>
        <ExDiv>생활</ExDiv>
        <ExDiv>동아리</ExDiv>
        <ExDiv>근로</ExDiv>
        <ExDiv>
          <form>
            <Input type="text" />
            <Submit><FiSearch size="20px" color="#9D9D9D" /></Submit>
          </form>
        </ExDiv>
      </SubContainer>
    </MainContainer>
  );
};

export default Menu;
