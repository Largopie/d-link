import Notice from "@/components/contents/notice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeClicked } from "@/store/slices/noticeSlice";
import styled from "styled-components";

interface PropsContainer {
  radius: string;
  bgColor: boolean;
}

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
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
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

const ClassScheduleContainer = styled.div`
  width: 330px;
  height: 365px;
  margin: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
`;

const ChooseNotice = styled.div`
  line-height: 45px;
  text-align: center;
  height: 45px;
  width: 100%;
  display: flex;
  border-radius: 8px 8px 0px 0px;
`;

const ChooseDivisionBtn = styled.div<PropsContainer>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? "#ffffff" : "#F2F2F2")};
  border-radius: ${(props) => props.radius};
  :hover {
    cursor: pointer;
  }
`;

const ChooseDepartmentBtn = styled.div<PropsContainer>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? "#ffffff" : "#F2F2F2")};
  border-radius: ${(props) => props.radius};
  :hover {
    cursor: pointer;
  }
`;

const Content = () => {
  const clicked = useAppSelector((state) => state.notice.clicked);
  const dispatch = useAppDispatch();

  const clickDivision = () => {
    dispatch(changeClicked("division"));
  };

  const clickDepartment = () => {
    dispatch(changeClicked("department"));
  };

  return (
    <ContentContainer>
      <SubContainer>
        <LeftContainer>
          {/* 학부공지 및 학과공지 */}
          <NoticeContainer>
            <ChooseNotice>
              <ChooseDivisionBtn
                bgColor={clicked === "division"}
                radius="10px 0px 10px 0px"
                onClick={clickDivision}
              >
                학과공지
              </ChooseDivisionBtn>
              <ChooseDepartmentBtn
                bgColor={clicked === "department"}
                radius="0px 10px 0px 10px"
                onClick={clickDepartment}
              >
                학부공지
              </ChooseDepartmentBtn>
            </ChooseNotice>
            <Notice />
          </NoticeContainer>
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
