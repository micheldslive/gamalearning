import styled from "styled-components";

export const AutoPlayContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const AutoPlayText = styled.span`
  margin-right: 15px;
  line-height: 20px;
  color: var(--gray);
`;
export const AutoPlayLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--red);
  transition: 0.3s ease all;
  border-radius: 15px;
  z-index: -1;
`;

export const AutoPlay = styled.div`
  position: relative;
  width: 74px;
  height: 36px;
`;

export const AutoPlayKnobs = styled.div`
  &::before {
    content: "OFF";
    position: absolute;
    top: 4px;
    left: 4px;
    color: white;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: var(--purple);
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }
`;

export const AutoPlayCheck = styled.input`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:checked + ${AutoPlayKnobs}:before {
    content: "ON";
    left: 42px;
    background-color: var(--purple);
  }

  &:checked ~ ${AutoPlayLayer} {
    background-color: var(--green);
  }
`;
