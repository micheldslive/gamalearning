import styled, { css } from "styled-components";
import AsideImageUrl from "assets/images/hacker-header-icon.png";

export { AsideImageUrl };

export const AsideImage = styled.img`
  width: 80%;
  padding: 2.2em 0 0 0;
  max-width: 450px;
  margin: 0 auto;
`;

export const AsideToggle = styled.div`
  ${({ theme }) => css`
    background-color: var(--purple);
    width: ${theme.aside ? "350px" : "0"};
    transition: width 0.2s linear;
  `}
`;

export const AsideFixed = styled.div`
  ${({ theme }) => css`
    z-index: 2;
    width: 350px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    transition: transform 0.2s linear;
    transform: ${!theme.aside ? "translateX(-350px)" : ""};
    background-color: var(--purple);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 1rem;
    align-content: start;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--green);
      outline: 1px solid var(--green);
    }

    @media (max-width: 991px) {
      width: 100%;
      transform: ${!theme.aside ? "translateX(-100%)" : ""};
    }
  `}
`;

export const AsideHeader = styled.div`
  color: var(--gray);
  padding: 1.5em;
  max-width: 350px;
  margin: 0 auto;
`;

export const AsideSmall = styled.small`
  color: var(--black);
  font-size: 0.6rem;
  text-transform: uppercase;
  width: max-content;
`;

export const AsideTitle = styled.h5`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AsideOpen = styled.span``;
