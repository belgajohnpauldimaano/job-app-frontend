import { connect } from "react-redux";

import Jobs from "./Jobs";
import { searchJobs } from "./JobsActions";
import { JobsDataSelectorContainer } from "./JobsEntityContainer";

const mapStateToProps = state => ({
  JobsData: JobsDataSelectorContainer(state)
});

export default connect(
  mapStateToProps,
  { searchJobs }
)(Jobs);
