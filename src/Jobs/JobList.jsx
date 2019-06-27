import React from "react";
import JobItem from "./JobItem";
export default function JobList({
  job_title,
  job_location,
  degree,
  job_type,
  job_created_at,
  salary_range_from,
  salary_range_to,
  xp_lvl,
  company_logo,
  company_name
}) {
  const props = {
    job_title,
    job_location,
    degree,
    job_type,
    job_created_at,
    salary_range_from,
    salary_range_to,
    xp_lvl,
    company_logo,
    company_name
  };
  return (
    <div>
      <JobItem {...props} />
    </div>
  );
}
