import React from "react";
import { range } from "utils";
import { Link } from "react-router-dom";
import classNames from "classnames";

const PaginationItem = ({ page, url, currentPage }) => {
  return (
    <li
      className={classNames({
        "page-item": true,
        active: currentPage === page
      })}
    >
      <Link to={`${url}?page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  );
};

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          url={url}
        />
      ))}
    </ul>
  );
};

export default Pagination;
