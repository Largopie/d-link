import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeClicked } from "@/store/slices/timetableSlice";
import styled from "styled-components";

interface PropsContainer {
  radius: string;
  bgColor: boolean;
}

const TimetableContainer = styled.div`
  width: 330px;
  height: 365px;
  margin: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 5px 10px #2525250d;
`;

const ChooseMenu = styled.div`
  line-height: 45px;
  text-align: center;
  height: 45px;
  width: 100%;
  display: flex;
  border-radius: 8px 8px 0px 0px;
`;

const ChooseTodayBtn = styled.div<PropsContainer>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? "#ffffff" : "#F2F2F2")};
  border-radius: ${(props) => props.radius};
  :hover {
    cursor: pointer;
  }
`;

const ChooseWeekBtn = styled.div<PropsContainer>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.bgColor ? "#ffffff" : "#F2F2F2")};
  border-radius: ${(props) => props.radius};
  :hover {
    cursor: pointer;
  }
`;

const TimeTableContent = styled.div`
  height: 320px;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
`;

const Timetable = () => {
  const clicked = useAppSelector((state) => state.timetable.clicked);
  const dispatch = useAppDispatch();

  const clickToday = () => {
    dispatch(changeClicked("today"));
  };

  const clickWeek = () => {
    dispatch(changeClicked("week"));
  };

  return (
    <TimetableContainer>
      <ChooseMenu>
        <ChooseTodayBtn
          bgColor={clicked === "today"}
          radius="8px 0px 8px 0px"
          onClick={clickToday}
        >
          오늘 시간표
        </ChooseTodayBtn>
        <ChooseWeekBtn
          bgColor={clicked === "week"}
          radius="0px 8px 0px 8px"
          onClick={clickWeek}
        >
          주간 시간표
        </ChooseWeekBtn>
      </ChooseMenu>
      {clicked === "today" ? (
          <TimeTableContent>오늘 시간표 입니다.</TimeTableContent>
        ) : (
          <TimeTableContent>주간 시간표 입니다.</TimeTableContent>
        )}
    </TimetableContainer>
  );
};

export default Timetable;
