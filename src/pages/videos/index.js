import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "redux/maps";
import VideoJS from "utils/videojs";
import {
  PlaylistContent,
  Container,
  Title,
  Subtitle,
  Playlists,
  Burger,
  Bullets,
  PlaylistTitle,
} from "assets/styles/video";

const Video = ({ props, state }) => {
  const { checked, modules } = state;

  const playerRef = useRef(null);
  const module = props.match.params.module - 1,
        lesson = props.match.params.lesson - 1;

  const activeModule = modules[module] || modules[0];
  const activeLesson = activeModule.videos[lesson] || activeModule.videos[0];

  useEffect(() => {
    window.scrollTo(0, 152);

    if (playerRef.current) {
      playerRef.current.src([{ src: activeLesson.src, type: "video/mp4" }]);
    }
  }, [activeLesson]);

  const videoJsOptions = {
    autoplay: checked,
    controls: true,
    responsive: true,
    fluid: true,
    tracks: [],
    sources: [
      {
        src: activeLesson.src,
        type: "video/mp4",
      },
    ],
  };

  if (playerRef.current) {
    playerRef.current.autoplay(checked);
  }

  const handlePlayerReady = (player) => {
    if (!modules[module] || !activeModule.videos[lesson]) {
      props.history.push(`/playlists/1/1`);
    }

    playerRef.current = player;
  };

  return (
    <>
      <Helmet>
        <title>Playlist - {activeLesson?.name}</title>
        <meta name="description" content="Playlist of Course." />
      </Helmet>
      <PlaylistContent>
        <Container>
          <Playlists to="/playlists">
            <Burger>
              <Bullets />
              <Bullets />
              <Bullets />
            </Burger>
            <PlaylistTitle>Playlists</PlaylistTitle>
          </Playlists>
          <Title>{activeLesson?.name}</Title>
          <Subtitle>{activeModule?.name}</Subtitle>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </Container>
      </PlaylistContent>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
