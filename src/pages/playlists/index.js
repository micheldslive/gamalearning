import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "reducer/maps";
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
} from "assets/styles/playlists";

const Playlists = ({ state }) => {
  const { modules } = state.gama;
  
  return (
    <>
      <Helmet>
        <title>Playlists</title>
        <meta name="description" content="Playlists of Course." />
      </Helmet>
      <Playlist>
        <Container>
          <Row>
            {modules?.map(({ id, week, name }) => (
              <Column lg={4} key={id}>
                <CardLink to={`/playlists/${id}/1`}>
                  <Card>
                    <CardBox>
                      <CardTitle>
                        {week} - {name}
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
};

export default connect(mapStateToProps, null)(Playlists);
