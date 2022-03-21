import React from "react";

const PaginationPages = ({ pageNum, activePage, gotoPage }) => {
    return (
        <li>
            <a
                href="#"
                onClick={gotoPage}
                className={`pagination-link ${
                    pageNum === activePage ? "is-current" : null
                }`}
                aria-label={`${
                    pageNum === activePage
                        ? `Page ${pageNum}`
                        : `Goto page ${pageNum}`
                }`}
                aria-current="page"
            >
                {pageNum}
            </a>
        </li>
    );
};

export default PaginationPages;
