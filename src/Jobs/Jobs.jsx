import React, { Component } from "react";
import JobFilter from "./JobFilter";
import JobList from "./JobList";
import JobsPagination from "./JobsPagination";
import "./Jobs.css";

export default class Jobs extends Component {
  componentDidMount() {
    this.props.searchJobs({ page: 1, query: "system" });
  }
  onClickPagination = data => {
    const {
      JobsData: { query }
    } = this.props;
    this.props.searchJobs({ page: data.page, query: query });
  };

  render() {
    const { JobsData, searchJobs } = this.props;
    let renderJobList = null;
    if (JobsData.jobs) {
      renderJobList = JobsData.jobs.map((jobObj, i) => {
        return <JobList key={i} {...jobObj} />;
      });
    }
    return (
      <div>
        <JobFilter searchJobs={searchJobs} />
        <div className={"job-list-container"}>
          <div>
            <strong className={"total-num"}>
              {JobsData.total_num} jobs found
            </strong>
          </div>
          <hr />
          {renderJobList}
          <JobsPagination
            pages={JobsData.pages}
            onClick={this.onClickPagination}
          />
        </div>
      </div>
    );
  }
}
