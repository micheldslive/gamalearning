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
} from "../../assets/styles/user";
import { Avatar } from "../../assets/styles/dashboard";

export const User = ({ user }) => {
    
  return (
    <>
      <UserContent>
        <Container>
          <UserHeader>
            <Title>
              <Subtitle>{user ? user.login : "micheldslive"}</Subtitle>
              {user ? user.name : "Michel Domingos"}
            </Title>
            <Image src={user ? user.avatar_url : Avatar}></Image>
          </UserHeader>
          <Bio>
            {user ? user.bio : "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose."}
          </Bio>
          <GroupContainer>
            <GroupContent>
              <GroupIcon src={RespositoriesIcon} />
              <GroupTitle>
                Repositories {user ? user.public_repos : "4"}
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={FollowersIcon} />
              <GroupTitle>
                {user ? user.followers : "0"} followers{" · "}
                {user ? user.following : "0"} following
              </GroupTitle>
            </GroupContent>
            <GroupContent>
              <GroupIcon src={MapPinIcon} />
              <GroupTitle>{user ? user.location : "Recife-PE"}</GroupTitle>
            </GroupContent>
          </GroupContainer>
        </Container>
      </UserContent>
    </>
  );
};
