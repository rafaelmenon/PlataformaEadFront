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
      case "@enrollment/ENROLLMENT_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@enrollment/ENROLLMENT_IN_SUCCESS": {
        draft.loading = false;
        draft.data = payload.enrollment.enrollment;
        draft.error = false;
        break;
      }

      case "@enrollment/ENROLLMENT_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}
