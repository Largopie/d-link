import styled from "styled-components";

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

const Header = () => {
  return (
    <HeaderContainer>
      <SubContainer>
        <ContentBox>D-Link</ContentBox>
        <ContentBox>Notice</ContentBox>
      </SubContainer>
    </HeaderContainer>
  );
};

export default Header;
