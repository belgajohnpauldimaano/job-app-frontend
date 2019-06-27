import React from "react";

export default function JobsPagination({ pages, onClick }) {
  if (!pages) {
    return null;
  }
  const renderPaginationItems = pages.map((pageObj, i) => {
    if (pageObj.tag === "dots") {
      return <div key={i}>{pageObj.page}</div>;
    }
    if (pageObj.tag === "first") {
      return (
        <div
          key={i}
          onClick={() => {
            onClick(pageObj);
          }}
        >
          {"<"}
        </div>
      );
    } else if (pageObj.tag === "last") {
      return (
        <div
          key={i}
          onClick={() => {
            onClick(pageObj);
          }}
        >
          {">"}
        </div>
      );
    }

    return (
      <div
        key={i}
        onClick={() => {
          onClick(pageObj);
        }}
        className={pageObj.selected ? "active-page" : ""}
      >
        {pageObj.page}
      </div>
    );
  });
  return <div className={"pagination-container"}>{renderPaginationItems}</div>;
}
