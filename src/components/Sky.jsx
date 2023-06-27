import React from "react";
import styled from "styled-components";
import { ReactComponent as RocketIcon } from "../images/rocket_icon.svg";

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(122.64deg, #90e0ef -22.07%, #caf0f8 76.17%);
  margin: 10px auto;
  overflow: auto;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  color: ${(props) => props.color};
`;

const NightWrapper = styled(Wrapper)`
  background: linear-gradient(122.64deg, #03045e -22.07%, #0077b6 76.17%);
`;

const Sky = () => {
  return (
    <>
      <Wrapper>
        <Title bold={true} color={"blue"}>
          로켓
        </Title>
        <RocketIcon width={100} height={100} />
      </Wrapper>
      <NightWrapper>
        <Title color={"pink"}>낮</Title>
        <RocketIcon width={100} height={100} />
      </NightWrapper>
    </>
  );
};

export default Sky;
