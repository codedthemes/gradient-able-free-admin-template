import React from 'react';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// project import
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';

// ==============================|| NAV GROUP ||============================== //

const NavGroup = ({ layout, group }) => {
  let navItems = '';

  if (group.children) {
    const groups = group.children;
    navItems = Object.keys(groups).map((item) => {
      item = groups[item];
      switch (item.type) {
        case 'collapse':
          return <NavCollapse key={item.id} collapse={item} type="main" />;
        case 'item':
          return <NavItem layout={layout} key={item.id} item={item} />;
        default:
          return false;
      }
    });
  }

  return (
    <React.Fragment>
      <ListGroup.Item as="li" bsPrefix=" " key={group.id} className="nav-item pcoded-menu-caption">
        <label className="text-capitalize">{group.title}</label>
      </ListGroup.Item>
      {navItems}
    </React.Fragment>
  );
};

export default NavGroup;
