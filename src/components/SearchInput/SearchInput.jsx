import React, { useContext } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const SearchInput = () => {
    const { handleSearch } = useContext(contactsContext);

    function handleInput(e) {
        handleSearch(e.target.value);
    }

    return (
        <div className="panel-block">
            <p className="control has-icons-left">
                <input
                    onChange={handleInput}
                    className="input"
                    type="text"
                    placeholder="Search"
                />
                <span className="icon is-left">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
    );
};

export default SearchInput;
