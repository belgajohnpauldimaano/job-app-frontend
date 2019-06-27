import React from "react";
import TimeAgo from "react-timeago";
import "./JobItem.css";
import mapmarker from "./../assets/images/map-marker-alt-solid.svg";
import briefcase from "./../assets/images/briefcase-solid.svg";
import graduationcap from "./../assets/images/graduation-cap-solid.svg";
import clock from "./../assets/images/clock-regular.svg";
export default function JobItem({
  job_title,
  salary_range_from,
  salary_range_to,
  job_location,
  xp_lvl,
  degree,
  job_type,
  job_created_at,
  company_logo,
  company_name
}) {
  const salaryrange = `₱${salary_range_from / 1000}k - ₱${salary_range_to /
    1000}k`;
  return (
    <div className={"job-item"}>
      <div className={"upper"}>
        <h4 className={"title"}>{job_title}</h4>
        <h4 className={"salary-range"}>{salaryrange}</h4>
      </div>
      <div className={"middle"}>
        <div>
          <img className={"icons"} src={mapmarker} alt={"location"} />
          {job_location}
        </div>
        <div>
          <img className={"icons"} src={briefcase} alt={"briefcase"} />
          {xp_lvl}
        </div>
        <div>
          <img className={"icons"} src={graduationcap} alt={"graduationcap"} />
          {degree}
        </div>
        <div>
          <img className={"icons"} src={clock} alt={"clock"} />
          {job_type}
        </div>
      </div>
      <div className={"bottom"}>
        <div>
          <img
            height={64}
            width={64}
            className={"company-log"}
            src={company_logo}
            alt={"company logo"}
          />
        </div>
        <div className={"company-name"}>{company_name}</div>
        <div className={"job-created"}>
          <TimeAgo date={job_created_at} />
        </div>
      </div>
      <hr />
    </div>
  );
}
