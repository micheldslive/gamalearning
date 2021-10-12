import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { playlists } from "services/playlists";
import VideoJS from "./videojs";
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

export const Video = ({ props, checked }) => {

  const playerRef = useRef(null);
  const id = props.match.params.id;
  const vid = props.match.params.vid - 1;

  const playlist = playlists[id] ? playlists[id] : playlists[0];
  const video = playlist.videos[vid]
    ? playlist.videos[vid]
    : playlist.videos[0];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 152);
    if (playerRef.current) {
      playerRef.current.src([{ src: video.src, type: "video/mp4" }]);
    }
  }, [location, video.src]);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    tracks: [],
    sources: [
      {
        src: video.src,
        type: "video/mp4",
      },
    ],
  };

  if (playerRef.current) {
    playerRef.current.autoplay(checked);
  }

  const handlePlayerReady = (player) => {
    if (!playlists[id] || !playlist.videos[vid]) {
      props.history.push(`/playlists`);
    }

    playerRef.current = player;

    player.on("ended", () => {
      if (player.autoplay()) {
        const pid = props.match.params.id;
        const qvid = playlists[pid].videos.length + 1;
        const src = playerRef.current.src();
        const find = playlists[pid].videos.find(video => video.src === src);
        const vid = parseInt(find.id) + 1;

        if (vid < qvid) {
          props.history.push(`/playlists/${pid}/${vid}`);
        } else {
          player.autoplay(false);
        }
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Playlist - {video.name}</title>
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
          <Title>{video.name}</Title>
          <Subtitle>{playlist.name}</Subtitle>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </Container>
      </PlaylistContent>
    </>
  );
};
