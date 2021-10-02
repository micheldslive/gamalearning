import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { MainError, Container, Error, ErrorMsg, Link } from "../../assets/styles/erro";

export class Page404 extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>404</title>
          <meta name="description" content="Page not Found." />
        </Helmet>
        <MainError>
          <Container>
            <Error>404</Error>
            <ErrorMsg>
              Talvez esta página mudou? Foi excluída? Está se escondendo na
              quarentena? Nunca existiu em primeiro lugar? Vamos para <Link to="/">HOME</Link> tentar de lá.
            </ErrorMsg>
          </Container>
        </MainError>
      </>
    );
  }
}