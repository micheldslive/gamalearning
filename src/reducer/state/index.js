import { playlists } from "services/playlists";
import { defineState } from "redux-localstore";

const defaultState = {
  user: null,
  aside: false,
  checked: false,
  activeLesson: 1,
  activeModule: 1,
  modules: playlists,
  lessonArray: [],
  moduleArray: [],
};

const initState = defineState(defaultState)('gama');

export const gama = (state = initState, action) => {
  if (action.type === "SET_ASIDE") {
    return {
      ...state,
      aside: action.aside,
    };
  }

  if (action.type === "SET_CHECKED") {
    return {
      ...state,
      checked: action.checked,
    };
  }

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }

  if (action.type === "ACTIVE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }

  return state;
};