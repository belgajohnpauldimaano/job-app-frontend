import { createSelector } from "reselect";

export const JobsDataSelector = ({ Jobs }) => Jobs.JobsSearchData;

export const JobsDataSelectorContainer = createSelector(
  [JobsDataSelector],
  ({ jobs, page, total_pages, is_loading, total_num, query }) => {
    let pages = [];
    if (!is_loading) {
      if (total_pages > 1) {
        pages = generatePages(total_pages, page);
      }
    }

    return {
      jobs,
      page,
      pages,
      total_num,
      is_loading,
      query
    };
  }
);

export function generatePages(total_pages, page) {
  const start = page - 2 > 1 ? page - 3 : 1;
  const end = page + 3 <= total_pages ? page + 4 : total_pages;
  const pages = [];
  for (let x = start; x <= end; x++) {
    const pageNum = {
      page: x,
      selected: x === page ? true : false,
      tag: `page`,
      enabled: true
    };
    pages.push(pageNum);
  }

  if (pages.length) {
    pages.unshift({
      page: 1,
      selected: false,
      tag: `first`,
      enabled: page !== 1 ? true : false
    });
    pages.push({
      page: total_pages,
      selected: false,
      tag: `last`,
      enabled: total_pages !== page ? true : false
    });
  }

  return pages;
}
