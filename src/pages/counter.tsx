import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/store/slices/counterSlice";
import styled from "styled-components";

const Button = styled.button`
  background-color: gray;
  width: 200px;
  height: 100px;
  border: 1px solid black;
  :hover {
    cursor: pointer;
  }
`;

const H1 = styled.h1`
  font-size: 40px;
`;

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <center>
        <H1>{count}</H1>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </center>
    </div>
  );
};
