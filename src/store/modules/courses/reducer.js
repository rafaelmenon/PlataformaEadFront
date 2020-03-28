import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  error: false,
  data: []
};

export default function enrollment(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {
      case "@courses/COURSES_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@courses/COURSES_IN_SUCCESS": {
        draft.loading = false;
        draft.data = payload.courses.courses;
        draft.error = false;
        break;
      }

      case "@courses/COURSES_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
