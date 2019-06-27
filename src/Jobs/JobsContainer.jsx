import { connect } from "react-redux";

import Jobs from "./Jobs";
import { testAction, searchJobs } from "./JobsActions";
import { JobsDataSelectorContainer } from "./JobsEntityContainer";

const mapStateToProps = state => ({
  Jobs: state.Jobs,
  JobsData: JobsDataSelectorContainer(state)
});

export default connect(
  mapStateToProps,
  { testAction, searchJobs }
)(Jobs);
