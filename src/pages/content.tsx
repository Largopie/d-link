import Notice from "@/components/contents/notice";
import Timetable from "@/components/contents/timetable";
import styled from "styled-components";

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
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
`;

const CafeteriaContainer = styled.div`
  width: 216px;
  height: 245px;
  margin: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
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
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
`;


const Content = () => {
  
  return (
    <ContentContainer>
      <SubContainer>
        <LeftContainer>
          {/* 학부공지 및 학과공지 */}
          <Notice />
          <LeftSubContainer>
            <ScheduleContainer />
            <CafeteriaContainer />
          </LeftSubContainer>
        </LeftContainer>
        <RightContainer>
          <StuInfoContainer />
          <Timetable />
        </RightContainer>
      </SubContainer>
    </ContentContainer>
  );
};

export default Content;
