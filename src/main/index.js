import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { Login } from "../pages/login";
import { User } from "../pages/user";
import { Playlists } from "../pages/playlists";
import { Video } from "../pages/videos";
import { AsideIn } from "../pages/asidein";
import { AsideOut } from "../pages/asideout";
import { Page404 } from "../pages/404";
import "bootstrap/dist/css/bootstrap.min.css";
import { AsideFixed, AsideToggle } from "../assets/styles/aside";
import {
  Dashboard,
  MainPage,
  Header,
  Image,
  BurgerContent,
  BurgerStyle,
  Bullets,
  Logo,
  Container,
  UserContent,
  UserName,
  UserAvatar,
  Avatar,
  Link,
} from "../assets/styles/dashboard";

const Burger = ({ aside, setOpen }) => {
  return (
    <BurgerContent>
      <BurgerStyle aside={aside} onClick={() => setOpen(!aside)}>
        <Bullets />
        <Bullets />
        <Bullets />
      </BurgerStyle>
    </BurgerContent>
  );
};

export const Main = () => {
  const [user, setUser] = useState();
  const [aside, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <Router>
      <Dashboard>
        <AsideFixed aside={aside} setOpen={setOpen}>
          <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
            <Route path="/" exact render={
              () => <AsideOut aside={aside} setOpen={setOpen} />} />
            <Route path="/playlists" exact render={
              () => <AsideOut aside={aside} setOpen={setOpen} />} />
            <Route path="/playlists/:id/:vid?" exact render={
              (props) => (
              <AsideIn aside={aside} setOpen={setOpen} props={props} checked={checked} setChecked={setChecked} />
              )} />
            <Route  render={
              () => <AsideOut aside={aside} setOpen={setOpen} />} />
          </AnimatedSwitch>
        </AsideFixed>
        <AsideToggle aside={aside} setOpen={setOpen}></AsideToggle>
        <MainPage>
          <Header>
            <Container>
              <Switch>
                <Route path="/playlists/:id/:vid?" exact render={
                  () => <Burger aside={aside} setOpen={setOpen} />} />
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
          <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
            <Route path="/" exact render={
                  (props) => <Login props={props} setUser={setUser} />} />
            <Route path="/playlists/:id/:vid" exact render={
              (props) => ( <Video props={props} checked={checked} />)} />
            <Route path="/user" exact render={
              () => ( <User user={user} />)} />
            <Route path="/playlists" exact component={Playlists} />
            <Route component={Page404} />
          </AnimatedSwitch>
        </MainPage>
      </Dashboard>
    </Router>
  );
};