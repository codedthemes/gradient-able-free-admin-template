import React from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// project import
import NavSearch from './NavSearch';

// ==============================|| NAV LEFT ||============================== //

const NavLeft = () => {
  return (
    <React.Fragment>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav me-auto">
        <ListGroup.Item as="li" bsPrefix=" " className="nav-item">
          <NavSearch />
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
};

export default NavLeft;
