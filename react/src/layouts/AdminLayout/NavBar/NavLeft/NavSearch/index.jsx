import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Button, FormControl } from 'react-bootstrap';

// ==============================|| NAV SEARCH ||============================== //

const NavSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  let searchContent = '';
  if (isOpen) {
    searchContent = (
      <div className="search-bar">
        <FormControl type="text" className="border-0 shadow-none" placeholder="Search here" />
        <Button variant="link" type="button" className="close" aria-label="Close" onClick={() => setIsOpen(false)}>
          <span aria-hidden="true">
            <i className="feather icon-x" />
          </span>
        </Button>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Link to="#" className="pop-search" onClick={() => setIsOpen(true)}>
        <i className="feather icon-search" />
      </Link>
      {searchContent}
    </React.Fragment>
  );
};

export default NavSearch;
