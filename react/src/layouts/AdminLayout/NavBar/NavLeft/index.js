import React from 'react';
import { ListGroup } from 'react-bootstrap';
import NavSearch from './NavSearch';

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
