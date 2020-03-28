import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { enrollmentInSuccess, enrollmentFailure } from "./actions";

function* enrollment({ payload }) {
  const { token, id } = payload;

  try {
    const response = yield call(api.get, `/matriculas/${id}`);

    const enrollment = {
        enrollment: response.data
    };

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(enrollmentInSuccess(token, enrollment));
  } catch (error) {
    yield put(enrollmentFailure());
  }
}

export default all([
  takeLatest("@enrollment/ENROLLMENT_IN_REQUEST", enrollment)
]);
