import React, { useContext, useEffect, useState } from "react";
import { contactsContext } from "../../contexts/ContactsContext";
import PaginationPages from "./PaginationPages";

const ContactsPagination = () => {
    const { activePage, totalPages, setActivePage, listContacts } =
        useContext(contactsContext);

    useEffect(() => {
        listContacts();
    }, [activePage]);

    const range = Array.from({ length: totalPages }, (_, i) => i + 1);

    function handlePagination(e) {
        if (e.target.innerText === "Previous" && activePage !== 1) {
            setActivePage(activePage - 1);
        } else if (
            e.target.innerText === "Next page" &&
            activePage !== totalPages
        ) {
            setActivePage(activePage + 1);
        } else if (e.target.innerText !== activePage) {
            setActivePage(parseInt(e.target.innerText));
        }
    }

    return (
        <div className="block pt-3 px-3">
            <nav
                className="pagination"
                role="navigation"
                aria-label="pagination"
            >
                <button
                    onClick={handlePagination}
                    className="button is-outlined pagination-previous"
                    title="This is the first page"
                    disabled={activePage === 1 || totalPages === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handlePagination}
                    className="button is-outlined pagination-next"
                    disabled={activePage === totalPages || totalPages === 0}
                >
                    Next page
                </button>

                <ul className="pagination-list">
                    {range.map((pageNum) => (
                        <PaginationPages
                            key={pageNum}
                            pageNum={pageNum}
                            activePage={activePage}
                            gotoPage={handlePagination}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default ContactsPagination;
