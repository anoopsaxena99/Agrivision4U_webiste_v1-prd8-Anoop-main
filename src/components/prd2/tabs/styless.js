import styled, {css} from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const StylizedTab = styled.button`
  color: #5f5f5f;
  width: 100%;
  padding: 10px 0;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: transparent;
  border: none;
  border-bottom-color: #5f5f5f;

  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #5f5f5f;
      font-weight: 500;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 1rem;
  flex-direction: column;
  width: 100%;
  color: black;
  margin-top: 3vw;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 1
};
export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: green;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;