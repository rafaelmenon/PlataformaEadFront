import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { coursesInSuccess, coursesFailure } from "./actions";

function* courses({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/cursos/${id}`);

    const courses = {
        courses: response.data
    };

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(coursesInSuccess(token, courses));
  } catch (error) {
    yield put(coursesFailure());
  }
}

export default all([
  takeLatest("@courses/COURSES_IN_REQUEST", courses)
]);
