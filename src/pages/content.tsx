import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 128px);
  padding: 30px 0px 0px 0px;
`;

const SubContainer = styled.div`
  display: flex;
`;

// 좌측 컨테이너
const LeftContainer = styled.div`
  display: flex;
  width: 600px;
  height: 520px;
  flex-direction: column;
`;

const NoticeContainer = styled.div`
  width: 570px;
  height: 245px;
  margin: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 2px 5px 10px #2525250D;
`;

const LeftSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 245px;
`;

const ScheduleContainer = styled.div`
  width: 324px;
  height: 245px;
  border-radius: 8px;
  margin: 15px;
  background-color: #FFFFFF;
  box-shadow: 2px 5px 10px #2525250D;
`;

const CafeteriaContainer = styled.div`
  width: 216px;
  height: 245px;
  margin: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 2px 5px 10px #2525250D;
`;

// 우측 컨테이너
const RightContainer = styled.div`
  display: flex;
  width: 360px;
  flex-direction: column;
`;

const StuInfoContainer = styled.div`
  width: 330px;
  height: 125px;
  margin: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 2px 5px 10px #2525250D;
`;

const ClassScheduleContainer = styled.div`
  width: 330px;
  height: 365px;
  margin: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 2px 5px 10px #2525250D;
`;


const Content = () => {
  return (
    <ContentContainer>
      <SubContainer>
        <LeftContainer>
          <NoticeContainer />
          <LeftSubContainer>
            <ScheduleContainer />
            <CafeteriaContainer />
          </LeftSubContainer>
        </LeftContainer>
        <RightContainer>
          <StuInfoContainer />
          <ClassScheduleContainer />
        </RightContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default Content;