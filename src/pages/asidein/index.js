import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { playlists } from "../../services/playlists";
import {
  AsideImage,
  AsideImageUrl,
  AsideHeader,
  AsideSmall,
  AsideTitle,
  AsideOpen,
} from "../../assets/styles/aside";

import {
  AutoPlayContent,
  AutoPlayText,
  AutoPlay,
  AutoPlayLayer,
  AutoPlayCheck,
  AutoPlayKnobs,
} from "../../assets/styles/autoplay";

import {
  LessonsContent,
  LessonsHeader,
  LessonsTitle,
  LessonsBody,
  LessonsList,
  LessonLink,
  Lesson,
  LessonIcon,
  LessonIconUrl,
  LessonTitle,

} from "../../assets/styles/lessons"

export const AsideIn = ({ aside, setOpen, props, checked, setChecked }) => {
  const ref = useRef(null);
  const id = props.match.params.id ? props.match.params.id : "";
  const playlist = playlists[id] ? playlists[id] : playlists[0];
  const  width = window.innerWidth;
  useEffect(() => {
   
    if (width > 992) {
      ref.current.click();
    }
  }, [width]);

  const Test = () => {
    if (width < 992) {
      ref.current.click();
    }
  }

  return (
    <>
      <div>
      <AsideOpen ref={ref} onClick={() => setOpen(!aside)}></AsideOpen>
      <NavLink to="/playlists">
        <AsideImage src={AsideImageUrl}></AsideImage>
      </NavLink>
      <AsideHeader>
        <AsideSmall>{playlist.week}</AsideSmall>
        <AsideTitle>{playlist.name}</AsideTitle>
      </AsideHeader>
      </div>
      <AutoPlayContent>
        <AutoPlayText>
          Reprodução<br />Automatica:
        </AutoPlayText>
        <AutoPlay>
          <AutoPlayCheck type="checkbox" checked={checked} onClick={() => setChecked(!checked)} readOnly/>
          <AutoPlayKnobs />
          <AutoPlayLayer />
        </AutoPlay>
      </AutoPlayContent>
      <LessonsContent>
        <LessonsHeader>
          <LessonsTitle>{playlist.videos.length} Aulas</LessonsTitle>
        </LessonsHeader>
        <LessonsBody>
          <LessonsList>
          {playlist.videos.map((video, index) => (
              <LessonLink key={video.id} to={`/playlists/${playlist.id}/${index+1}`} activeClassName="active" onClick={Test}>
                <Lesson>
                  <LessonIcon src={LessonIconUrl} />
                  <LessonTitle>{video.name}</LessonTitle>
                </Lesson>
              </LessonLink>
            ))}
          </LessonsList>
        </LessonsBody>
      </LessonsContent>
    </>
  );
};
