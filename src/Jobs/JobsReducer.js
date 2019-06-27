import JOB_TEST_ACTION from "./JobsActionsTypes";

const initialState = {
  testData: [],
  JobsSearchData: {
    jobs: [],
    page: 1,
    query: "",
    size: "12",
    total_num: 1,
    total_pages: 1,
    is_loading: false,
    error_msg: null
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case JOB_TEST_ACTION.TEST_ACTION: {
      return {
        ...state,
        testData: [...payload]
      };
    }
    case JOB_TEST_ACTION.SEARCH_JOBS_IN_PROGRESS: {
      return {
        ...state,
        JobsSearchData: {
          ...state.JobsSearchData,
          is_loading: true
        }
      };
    }
    case JOB_TEST_ACTION.SEARCH_JOBS_COMPLETED: {
      return {
        ...state,
        JobsSearchData: {
          ...state.JobsSearchData,
          ...payload
        }
      };
    }
    default:
      return state;
  }
};
