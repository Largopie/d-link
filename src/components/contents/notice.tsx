import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeClicked } from "@/store/slices/noticeSlice";
import styled from "styled-components";

interface PropsContainer {
  radius: string;
  bgColor: boolean;
}

const NoticeContainer = styled.div`
  width: 570px;
  height: 245px;
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

const NoticeContent = styled.div`
  padding: 20px;
  height: 200px;
  border-radius: 0px 0px 8px 8px;
`;


const Notice = () => {
  const clicked = useAppSelector((state) => state.notice.clicked);
  const dispatch = useAppDispatch();

  const clickDivision = () => {
    dispatch(changeClicked("division"));
  };

  const clickDepartment = () => {
    dispatch(changeClicked("department"));
  };


  return (
    <NoticeContainer>
      <ChooseMenu>
        <ChooseDivisionBtn
          bgColor={clicked === "division"}
          radius="8px 0px 8px 0px"
          onClick={clickDivision}
        >
          학과공지
        </ChooseDivisionBtn>
        <ChooseDepartmentBtn
          bgColor={clicked === "department"}
          radius="0px 8px 0px 8px"
          onClick={clickDepartment}
        >
          학부공지
        </ChooseDepartmentBtn>
      </ChooseMenu>
      {clicked === "division" ? (
        <NoticeContent>division 입니다.</NoticeContent>
      ) : (
        <NoticeContent>department입니다.</NoticeContent>
      )}
    </NoticeContainer>
  );
};

export default Notice;
