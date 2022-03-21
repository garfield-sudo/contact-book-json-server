import React from "react";
import CreateContactButton from "./ContactForm/CreateContactButton";
import ContactsList from "./ContactsList/ContactsList";
import ContactsPagination from "./ContactsPagination/ContactsPagination";
import SearchInput from "./SearchInput/SearchInput";

const LeftSide = () => {
    return (
        <div className="column">
            <SearchInput />
            {/* <SearchInput filterLit={handleContactsSearch} /> */}
            <p className="panel-tabs">
                <a href="#" className="is-active">
                    All
                </a>
                <a href="#">Favourites</a>
                <a href="#">Relatives</a>
                <a href="#">Friends</a>
                <a href="#">Colleagues</a>
                <a href="#">Blocked</a>
            </p>

            <ContactsList />
            <CreateContactButton />
            <ContactsPagination />
        </div>
    );
};

export default LeftSide;
