import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "assets/images/logo-gama.png";
import Avatar from "assets/images/user-img.jpg";

export { Logo, Avatar };

export const Dashboard = styled.div`
  @media (min-width: 992px) {
    min-height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const MainPage = styled.div``;

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: 1180px) {
    ${({ theme }) => css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #effffa;
      transform: ${theme.aside ? "translateX(0)" : "translateX(-100%)"};
      height: 100vh;
      text-align: left;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.3s ease-in-out;
    `}

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
`;

export const BurgerContent = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const BurgerStyle = styled.button`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (max-width: 991px) {
      position: ${theme.aside ? "fixed" : ""};
    }

    &:focus {
      outline: none;
    }

    span {
      width: 2rem;
      height: 0.25rem;
      background: var(--purple);
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      @media (max-width: 991px) {
        background: ${theme.aside ? "var(--green)" : "var(--purple)"};
      }

      :first-child {
        transform: ${theme.aside ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${theme.aside ? "0" : "1"};
        transform: ${theme.aside ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${theme.aside ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  `}
`;
export const Bullets = styled.span``;

export const Header = styled.header`
  z-index: 900;
  transition: 0.3s;
  background-color: var(--green);
  transition: 0.3s all;
`;
export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 127px;
  flex: auto;

  @media (max-width: 991px) {
    flex-direction: row-reverse;
  }
`;

export const Image = styled.img`
  width: 230px;

  @media (max-width: 499px) {
    width: 200px;
  }
`;

export const UserContent = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 1rem;
  align-items: center;
  background-color: var(--purple);
  padding: 0.4rem;
  border-radius: 20rem;
  transition: all 0.2s linear;

  @media (max-width: 650px) {
    grid-gap: 0rem;
    padding: 0.3rem;
  }
`;

export const UserName = styled.span`
  padding-left: 1rem;
  color: var(--gray);
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  @media (max-width: 650px) {
    width: 35px;
    height: 35px;
  }
`;

export const Link = styled(NavLink)`
  transition: all 0.3s linear;
`;
