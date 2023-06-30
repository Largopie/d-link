import styled from "styled-components";
import { FiBell } from "react-icons/fi";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
`;

const SubContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ContentBox = styled.div`
  font-size: 18px;
  color: #ffffff;
`;

const NoticeBtn = styled.button`
  :hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SubContainer>
        <ContentBox>D-Link</ContentBox>
        <ContentBox>
          <NoticeBtn>
            <FiBell size="18px" color="#ffffff" />
          </NoticeBtn>
        </ContentBox>
      </SubContainer>
    </HeaderContainer>
  );
};

export default Header;
