import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #048ad7;
`;

const SubContainer = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  display: flex;
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
