import { createStore } from "redux";
import { playlists } from "services/playlists";

const initState = {
  user: null,
  aside: false,
  checked: false,
  activeLesson: 1,
  activeModule: 1,
  modules: playlists,
  lessonArray: [],
  moduleArray: [],
};

const reducer = (state = initState, action) => {
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

export const store = createStore(reducer);
