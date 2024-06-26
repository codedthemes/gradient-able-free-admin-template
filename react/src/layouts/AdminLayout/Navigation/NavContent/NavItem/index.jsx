import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// react-bootstrap
import { ListGroup } from 'react-bootstrap';

// project import
import NavIcon from '../NavIcon';
import NavBadge from '../NavBadge';

import { ConfigContext } from '../../../../../contexts/ConfigContext';
import * as actionType from '../../../../../store/actions';
import useWindowSize from '../../../../../hooks/useWindowSize';

// ==============================|| NAV ITEM ||============================== //

const NavItem = ({ item }) => {
  const windowSize = useWindowSize();
  const configContext = useContext(ConfigContext);
  const { dispatch } = configContext;

  let itemTitle = item.title;
  if (item.icon) {
    itemTitle = <span className="pcoded-mtext">{item.title}</span>;
  }

  let itemTarget = '';
  if (item.target) {
    itemTarget = '_blank';
  }

  let subContent;
  if (item.external) {
    subContent = (
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <NavIcon items={item} />
        {itemTitle}
        <NavBadge items={item} />
      </a>
    );
  } else {
    subContent = (
      <NavLink to={item.url} className="nav-link" exact="true" target={itemTarget}>
        <NavIcon items={item} />
        {itemTitle}
        <NavBadge items={item} />
      </NavLink>
    );
  }
  let mainContent = '';

  if (windowSize.width < 992) {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className={item.classes} onClick={() => dispatch({ type: actionType.COLLAPSE_MENU })}>
        {subContent}
      </ListGroup.Item>
    );
  } else {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className={item.classes}>
        {subContent}
      </ListGroup.Item>
    );
  }

  return <React.Fragment>{mainContent}</React.Fragment>;
};

export default NavItem;
