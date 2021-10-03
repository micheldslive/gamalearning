import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import { playlists } from "../../services/playlists";
import {
  Playlist,
  Container,
  Column,
  Card,
  CardBox,
  CardLink,
  CardTitle,
  CardImage,
  CardImageUrl,
} from "../../assets/styles/playlists";

export class Playlists extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Playlists</title>
          <meta name="description" content="Playlists of Course." />
        </Helmet>
        <Playlist>
          <Container>
            <Row>
              {playlists.map((playlist) => (
                <Column lg={4} key={playlist.id}>
                  <CardLink to={`/playlists/${playlist.id}/1`}>
                    <Card>
                      <CardBox>
                        <CardTitle>
                          {playlist.week} - {playlist.name}
                        </CardTitle>
                        <CardImage src={CardImageUrl} />
                      </CardBox>
                    </Card>
                  </CardLink>
                </Column>
              ))}
            </Row>
          </Container>
        </Playlist>
      </>
    );
  }
}
