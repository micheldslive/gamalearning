import React, { useState, useRef } from "react";
import { githubApi } from "services/github";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
import {
  LoginContent,
  Container,
  Title,
  LoginForm,
  Input,
  LinkGroup,
  Entrar,
  InputGroup,
  InputIcon,
  GithubIcon,
  Icon,
  Response,
} from "assets/styles/login";

const Login = ({ props, toggleUser }) => {
  const input = useRef(null);
  const [message, setMessage] = useState([]);

  const handleClick = async () => {
    await githubApi
      .get(input.current.value)
      .then((response) => {
        setMessage(["Usuário carregado com Sucesso!", 1]);
        setTimeout(() => {
          toggleUser(response.data);
          props.history.push(`/playlists`);
        }, 3000);
      })
      .catch(() => {
        setMessage(["Esse usuário não existe no Github!", 0]);
      });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login Page." />
      </Helmet>
      <LoginContent>
        <Container>
          <Title>Github Login</Title>
          <LoginForm>
            <InputGroup>
              <InputIcon>
                <Icon src={GithubIcon}></Icon>
              </InputIcon>
              <Input ref={input} type="text" placeholder="Github Username" />
            </InputGroup>
            <LinkGroup>
              <Entrar onClick={handleClick}>ENTRAR</Entrar>
              <Entrar as={Link} to="/playlists">
                VISITAR
              </Entrar>
            </LinkGroup>
            <Response message={message[1]}>{message[0]}</Response>
          </LoginForm>
        </Container>
      </LoginContent>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
