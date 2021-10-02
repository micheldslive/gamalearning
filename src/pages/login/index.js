import React, { useState, useRef } from "react";
import { githubApi } from "../../services/github";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
} from "../../assets/styles/login";

export const Login = ({ props, setUser }) => {
  const input = useRef(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState(0);

  const handleClick = () => {
    if (input.current.value === "") {
      setType(0);
      setMessage("Campo Github Username em branco!");
    } else {
      githubApi.get(input.current.value)
        .then((response) => {
          setType(1);
          setMessage("Usuário carregado com Sucesso!");
          setTimeout(() => {
            setUser(response.data);
            props.history.push(`/playlists`);
          }, 3000);
        })
        .catch((err) => {
          setType(0);
          setMessage("Esse usuário não existe no Github!");
        });
    }
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
            <Response type={type}>{message}</Response>
          </LoginForm>
        </Container>
      </LoginContent>
    </>
  );
};
