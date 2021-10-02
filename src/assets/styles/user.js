import styled from "styled-components";
import RespositoriesIcon from "../images/repositories.png";
import FollowersIcon from "../images/followers.png";
import MapPinIcon from "../images/map-pin.png";

export { RespositoriesIcon, FollowersIcon, MapPinIcon };

export const UserContent = styled.div`
  padding: 4rem 0;
  letter-spacing: 2px;
`;

export const Container = styled.section`
  max-width: 700px;
`;

export const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  }
`;

export const Title = styled.h2``;

export const Subtitle = styled.h5`
  font-family: sans-serif;
`;

export const Image = styled.img`
  max-width: 150px;
  border-radius: 100%;
`;

export const Bio = styled.div`
  margin-top: 30px;
`;
export const GroupContainer = styled.div`
  margin-top: 30px;
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const GroupContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const GroupIcon = styled.img`
  margin-right: 5px;
  width: 16px;
  height: 16px;
`;

export const GroupTitle = styled.span``;