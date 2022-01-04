import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
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
  const { modules } = state;

  return (
    <>
      <Helmet>
        <title>Playlists</title>
        <meta name="description" content="Playlists of Course." />
      </Helmet>
      <Playlist>
        <Container>
          <Row>
            {modules.map(({ id, week, name }) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
