import styled from "styled-components";
import GithubIcon from "../images/github.svg";

export { GithubIcon };

export const LoginContent = styled.div`
  position: relative;
  padding: 6rem 0;
  max-width: 440px;
  margin: 0 auto;

  @media (max-width: 400px) {
    max-width: 340px;
  }
`;

export const Container = styled.section``;

export const Title = styled.h5`
  color: var(--green);
  position: relative;
  font-size: 21px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: 2px;
  text-align: left;

  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid var(--green);
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const LoginForm = styled.div``;

export const InputGroup = styled.div`
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid var(--green);
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  padding: 6px 12px;
`;

export const Icon = styled.img``;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: var(--black);
  letter-spacing: 1px;
`;

export const LinkGroup = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Entrar = styled.a`
  padding: 10px 20px;
  margin: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  color: white;
  background-color: var(--green);
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 3px solid var(--purple);
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    color: black;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
      background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 14px 26px -12px var(--green),
      0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px var(--green);
  }
`;

export const Response = styled.div`
  text-align: center;
  color: ${({ type }) => (type ? "var(--green)" : "var(--red)")};
`;
