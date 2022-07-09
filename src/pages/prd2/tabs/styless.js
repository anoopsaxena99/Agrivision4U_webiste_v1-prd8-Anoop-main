import styled from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

`;

export const StylizedTab = styled.button`
  color: green;
  width: 60%;
  font-weight: bold;
  height: 50px;
  text-align: left;
  padding: 10px 0px;
  border:none;
  background-color:#fff;
  font-size: 1rem;
  border-radius: 2%;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 0.7rem;
  width: 100%;
  height: 0vw
`;

export const TabsHolder = styled.div`
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65
};
export const TabSlider = styled.div`
  transition: 0.2s;
  
`;