import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  margin-left: 0%;
  padding: 0vw;
  @media screen and (max-width: 900px) {
    margin-top: 57%;
  }
  @media screen and (max-width: 601px) {
    margin-top: 50%;
    width: 100%;
    margin-left: 5%;
  }
`;

export const StylizedTab = styled.button`
  color: #0b6e4f;
  font-weight: bold;
  padding: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 0.8rem;
  background-color: #fff;
  border-color: #0b6e4f;
  margin: 7vw 5vw;
  border: 2px solid #0b6e4f;
  @media screen and (max-width: 601px) {
    width: 100vw;
    margin-left: 5%;
    padding: 0vw 6vw;
  }

  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #fff;
      font-weight: bold;
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 2%;
  flex-direction: column;
  width: 100%;
  color: black;
  text-align: center;
  justify-content: center;
  @media screen and (max-width: 601px) {
    width: 100%;
    margin-left: 3%;
  }
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65,
};

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 0;
            box-shadow: inset 0 0 0 0 0;
  }
  100% {
    -webkit-box-shadow: inset 100px 100px 100px 100px #0B6E4F;
            box-shadow: inset 100px 100px 100px 100px #0B6E4F;
  }
`;
