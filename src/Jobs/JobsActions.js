import JOBS_ACTION_TYPES from "./JobsActionsTypes";

export const testAction = data => {
  return {
    type: JOBS_ACTION_TYPES.TEST_ACTION,
    payload: data
  };
};

export const testActionInProgress = data => {
  return {
    type: JOBS_ACTION_TYPES.TEST_ACTION_PROGRESS,
    payload: null
  };
};

export const testActionCompleted = data => {
  return {
    type: JOBS_ACTION_TYPES.TEST_ACTION_COMPLETED,
    payload: data
  };
};

export const searchJobs = ({ page, query }) => {
  return {
    type: JOBS_ACTION_TYPES.SEARCH_JOBS,
    payload: { page, query }
  };
};

export const searchJobsInProgress = () => {
  return {
    type: JOBS_ACTION_TYPES.SEARCH_JOBS_IN_PROGRESS,
    payload: null
  };
};

export const searchJobsCompleted = data => {
  return {
    type: JOBS_ACTION_TYPES.SEARCH_JOBS_COMPLETED,
    payload: data
  };
};
