import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "reducer/maps";
import {
  AsideImage,
  AsideImageUrl,
  AsideHeader,
  AsideSmall,
  AsideTitle,
  AsideOpen,
} from "assets/styles/aside";

import {
  AutoPlayContent,
  AutoPlayText,
  AutoPlay,
  AutoPlayLayer,
  AutoPlayCheck,
  AutoPlayKnobs,
} from "assets/styles/autoplay";

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
} from "assets/styles/lessons";

const AsideIn = ({ props, state, toggleAside, toggleChecked }) => {
  const { modules, aside, checked } = state.gama;
  const module = props.match.params.module - 1;

  const playlist = modules[module] || modules[0];

  const width = window.innerWidth;
  useEffect(() => {
    if (width > 992) {
      toggleAside(true);
    } else {
      toggleAside(false);
    }
  }, [width, toggleAside]);

  return (
    <>
      <div>
        <AsideOpen onClick={() => toggleAside(!aside)}></AsideOpen>
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
          Reprodução
          <br />
          Automatica:
        </AutoPlayText>
        <AutoPlay>
          <AutoPlayCheck type="checkbox" checked={checked} onClick={() => toggleChecked(!checked)} readOnly />
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
            {playlist.videos.map(({ id, name }) => (
              <LessonLink key={id} to={`/playlists/${playlist.id}/${id}`} activeClassName="active">
                <Lesson>
                  <LessonIcon src={LessonIconUrl} />
                  <LessonTitle>{name}</LessonTitle>
                </Lesson>
              </LessonLink>
            ))}
          </LessonsList>
        </LessonsBody>
      </LessonsContent>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AsideIn);
