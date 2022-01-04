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
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
import { useEffect } from "react";
import { defaultUser } from "services/user";

const User = ({ state, toggleAside }) => {
  const { login, name, avatar_url, bio, public_repos, followers, following, location } = state.user || defaultUser;
  
  useEffect(() => {
    toggleAside(false);
  }, [toggleAside]);
    
  return (
    <>
      <UserContent>
        <Container>
          <UserHeader>
            <Title>
              <Subtitle>{login}</Subtitle>
              {name}
            </Title>
            <Image src={avatar_url}></Image>
          </UserHeader>
          <Bio>
            {bio || "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."}
          </Bio>
          <GroupContainer>
            <GroupContent>
              <GroupIcon src={RespositoriesIcon} />
              <GroupTitle>
                Repositories {public_repos}
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={FollowersIcon} />
              <GroupTitle>
                {followers} followers{" · "}
                {following} following
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={MapPinIcon} />
              <GroupTitle>{location}</GroupTitle>
            </GroupContent>
          </GroupContainer>
        </Container>
      </UserContent>
    </>
  );
};

export default (connect(mapStateToProps, mapDispatchToProps))(User);