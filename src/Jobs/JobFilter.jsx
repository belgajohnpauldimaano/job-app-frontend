import React from "react";
import searchIcon from "./../assets/images/search-solid.svg";

export default class JobFilter extends React.Component {
  state = {
    queryText: ""
  };
  handleOnchange = e => {
    this.props.searchJobs({ page: 1, query: e.target.value });
    this.setState({
      queryText: e.target.value
    });
  };

  render() {
    return (
      <div className={"job-filter-container"}>
        <div className={"label"}>
          <img height={18} width={18} src={searchIcon} alt={searchIcon} />
          Search for job title or company name
        </div>
        <div>
          <input value={this.state.queryText} onChange={this.handleOnchange} />
          <div className={"filter-button-container"}>
            <button className={"filter-button"}>Filter results</button>
          </div>
        </div>
      </div>
    );
  }
}
