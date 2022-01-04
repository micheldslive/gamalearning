import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Login from "pages/login";
import User from "pages/user";
import Playlists from "pages/playlists";
import Video from "pages/videos";
import AsideIn from "components/asidein";
import AsideOut from "components/asideout";
import Burguer from "components/hamburguer/Burguer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Page404 } from "pages/404";
import { connect } from "react-redux";
import { mapStateToProps } from "redux/maps";
import { AsideFixed, AsideToggle } from "assets/styles/aside";
import {
  Dashboard,
  MainPage,
  Header,
  Image,
  Logo,
  Container,
  UserContent,
  UserName,
  UserAvatar,
  Avatar,
  Link,
} from "assets/styles/dashboard";

const Main = ({ state }) => {
  const { user } = state;

  return (
    <Router>
      <Dashboard>
        <AsideFixed>
          <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
            <Route path="/" exact render={() => <AsideOut />} />
            <Route path="/playlists" exact render={() => <AsideOut />} />
            <Route path="/playlists/:module/:lesson?" exact render={(props) => ( <AsideIn props={props} />)} />
            <Route render={() => <AsideOut />} />
          </AnimatedSwitch>
        </AsideFixed>
        <AsideToggle></AsideToggle>
        <MainPage>
          <Header>
            <Container>
              <Switch>
                <Route path="/playlists/:module/:lesson?" exact render={() => <Burguer />} />
              </Switch>
              <Link to="/">
                <Image src={Logo} alt="Gama Logo" />
              </Link>
              <UserContent to="/user">
                <UserName>{user ? user.login : "Olá visitante"}</UserName>
                <UserAvatar src={user ? user.avatar_url : Avatar}></UserAvatar>
              </UserContent>
            </Container>
          </Header>
          <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}  className="switch-wrapper">
            <Route  path="/" exact render={(props) => <Login props={props} />} />
            <Route path="/playlists/:module/:lesson" exact render={(props) => <Video props={props} />} />
            <Route path="/user" exact render={() => <User />} />
            <Route path="/playlists" exact component={Playlists} />
            <Route component={Page404} />
          </AnimatedSwitch>
        </MainPage>
      </Dashboard>
    </Router>
  );
};

export default connect(mapStateToProps, null)(Main);
