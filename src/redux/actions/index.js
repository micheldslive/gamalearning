export function toggleAside(aside) {
  return {
    type: "SET_ASIDE",
    aside,
  };
}

export function toggleChecked(checked) {
  return {
    type: "SET_CHECKED",
    checked,
  };
}

export function toggleUser(user) {
  return {
    type: "SET_USER",
    user,
  };
}

export function toggleActiveLesson(lesson, module) {
  return {
    type: "ACTIVE_LESSON",
    lesson,
    module,
  };
}
