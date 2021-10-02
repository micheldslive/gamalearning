import styled from "styled-components";
import { Link } from "react-router-dom";

export const PlaylistContent = styled.div`
  position: relative;
  padding: 3rem 0;
`;

export const Container = styled.section``;

export const Title = styled.h3``;

export const Subtitle = styled.h5`
  margin-bottom: 15px;
`;

export const Playlists = styled(Link)`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 20px;
  color: black;
  border: 2px solid black;
  max-width: 150px;
  justify-content: space-evenly;
  margin-bottom: 15px;
  opacity: 0.6;
  transition: all 0.2s linear;

  &:hover {
    color: black;
    opacity: 1;
  }
`;

export const Burger = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  background: transparent;
  margin-right: 5px;
  cursor: pointer;
`;

export const Bullets = styled.span`
  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 5px;
    background: black;
    display: block;
    margin: 1px;
  }
`;

export const PlaylistTitle = styled.span`
  font-size: 13px;
  letter-spacing: 2px;
  padding-top: 3px;
`;
