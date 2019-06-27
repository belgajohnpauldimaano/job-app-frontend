import { fork, all } from "redux-saga/effects";

import JobsSaga from "./../Jobs/JobsSaga";

export default function* sagas() {
  yield all([fork(JobsSaga)]);
}
