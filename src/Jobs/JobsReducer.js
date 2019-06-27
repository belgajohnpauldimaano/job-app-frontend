import JOB_TEST_ACTION from "./JobsActionsTypes";

const initialState = {
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
