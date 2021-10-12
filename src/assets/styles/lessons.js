import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LessonHeaderUrl from "assets/images/aside-menu.png";
import LessonIconUrl from "assets/images/stack-hacker-ico.png";

export { LessonIconUrl };

export const LessonsContent = styled.div`
  position: relative;
  max-width: 320px;
  margin: 0 auto;
`;

export const LessonsHeader = styled.div`
  cursor: pointer;
  padding: 0.6rem 1.2rem 0.6rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  position: relative;
  background: url(${LessonHeaderUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const LessonsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  color: var(--purple);
`;

export const LessonsBody = styled.div`
  overflow: auto;
  transition: max-height 0.2s linear;
  max-height: 280px;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--green);
    outline: 1px solid var(--green);
  }
`;

export const LessonsList = styled.div`
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const LessonLink = styled(NavLink)`

color: white;
opacity: 0.5;
transition: all 0.2s linear;

&:hover, &.active {
  color: white;
  opacity: 1;
}

`;

export const Lesson = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 300px;
  cursor: pointer;
`;

export const LessonIcon = styled.img`
  width: 16px;
  height: 21px;
`;

export const LessonTitle = styled.span`
font-size: 14px;
margin-left: 5px;
`;
