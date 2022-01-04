import {
  UserContent,
  Container,
  UserHeader,
  Title,
  Image,
  Subtitle,
  Bio,
  GroupContainer,
  GroupContent,
  GroupIcon,
  GroupTitle,
  RespositoriesIcon,
  FollowersIcon,
  MapPinIcon,
} from "assets/styles/user";
import { Avatar } from "assets/styles/dashboard";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
import { useEffect } from "react";

const User = ({ state, toggleAside }) => {
  const { login, name, avatar_url, bio, public_repos, followers, following, location } = state.user;
  
  useEffect(() => {
    toggleAside(false);
  }, [toggleAside]);
    
  return (
    <>
      <UserContent>
        <Container>
          <UserHeader>
            <Title>
              <Subtitle>{login || "micheldslive"}</Subtitle>
              {name || "Michel Domingos"}
            </Title>
            <Image src={avatar_url || Avatar}></Image>
          </UserHeader>
          <Bio>
            {bio || "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."}
          </Bio>
          <GroupContainer>
            <GroupContent>
              <GroupIcon src={RespositoriesIcon} />
              <GroupTitle>
                Repositories {public_repos || "15"}
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={FollowersIcon} />
              <GroupTitle>
                {followers || "0"} followers{" · "}
                {following || "0"} following
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={MapPinIcon} />
              <GroupTitle>{location || "Recife-PE"}</GroupTitle>
            </GroupContent>
          </GroupContainer>
        </Container>
      </UserContent>
    </>
  );
};

export default (connect(mapStateToProps, mapDispatchToProps))(User);