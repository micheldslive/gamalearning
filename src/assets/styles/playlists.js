import { Link } from "react-router-dom";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import CardImageUrl from "assets/images/stack-hacker-logo-verde.png";

export { CardImageUrl };

export const Playlist = styled.div`
  background-color: var(--gray);
  position: relative;
  padding: 3rem 0;
`;

export const Container = styled.section``;

export const Column = styled(Col)`
  padding: 0;
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  padding: 20px;
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: all 0.2s linear;
  margin: 5px;
  width: 100%;

  &:hover {
    border-color: var(--green);
    color: black;
  }
`;

export const CardTitle = styled.h3`
  margin: 5px 10px 5px 0;
  font-size: 1.17rem;
`;

export const CardImage = styled.img`
  height: 40px;
`;
