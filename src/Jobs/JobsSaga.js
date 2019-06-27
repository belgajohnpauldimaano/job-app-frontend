import { take, fork, call, put } from "redux-saga/effects";
import axios from "axios";
import JOBS_ACTION_TYPES from "./JobsActionsTypes";

import {
  testActionInProgress,
  testActionCompleted,
  searchJobsInProgress,
  searchJobsCompleted
} from "./JobsActions";

function* _testAction(data) {
  yield put(testActionInProgress());

  yield put(testActionCompleted(data));
}

function* _searchJobs({ page, query }) {
  yield put(searchJobsInProgress());
  try {
    const {
      data: {
        data: { jobs, size, total_num, total_pages }
      }
    } = yield call(axios, {
      method: "GET",
      url: `https://search.bossjob.com/api/v1/search/job_filter?size=12&query=${query}&page=${page}`
    });

    const jobSearchData = {
      jobs: jobs,
      page: page,
      query: query,
      size: size,
      total_num: total_num,
      total_pages: total_pages,
      is_loading: false,
      error_msg: null
    };

    yield put(searchJobsCompleted(jobSearchData));
  } catch (error) {
    const jobSearchData = {
      is_loading: false,
      error_msg: "something went wrong."
    };

    yield put(searchJobsCompleted(jobSearchData));
  }
}

export default function* JobsSaga() {
  while (true) {
    const { type, payload } = yield take([
      JOBS_ACTION_TYPES.TEST_ACTION,
      JOBS_ACTION_TYPES.SEARCH_JOBS
    ]);

    switch (type) {
      case JOBS_ACTION_TYPES.TEST_ACTION:
        yield fork(_testAction, payload);
        break;
      case JOBS_ACTION_TYPES.SEARCH_JOBS:
        yield fork(_searchJobs, payload);
        break;
      default:
    }
  }
}
