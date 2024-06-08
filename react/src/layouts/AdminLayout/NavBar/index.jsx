import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// project import
import NavLeft from './NavLeft';
import NavRight from './NavRight';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

// assets
import logo from '../../../assets/images/logo.png';

// ==============================|| NAV BAR ||============================== //

const NavBar = () => {
  const [moreToggle, setMoreToggle] = useState(false);
  const configContext = useContext(ConfigContext);
  const { collapseMenu, layout } = configContext.state;
  const { dispatch } = configContext;

  let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', 'header-blue', 'headerpos-fixed'];
  if (layout === 'vertical') {
    headerClass = [...headerClass, 'headerpos-fixed'];
  }

  let toggleClass = ['mobile-menu'];
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  const navToggleHandler = () => {
    dispatch({ type: actionType.COLLAPSE_MENU });
  };

  let moreClass = ['mob-toggler'];
  let collapseClass = ['collapse navbar-collapse'];
  if (moreToggle) {
    moreClass = [...moreClass, 'on'];
    collapseClass = [...collapseClass, 'd-block'];
  }

  let navBar = (
    <React.Fragment>
      <div className="m-header">
        <Link to="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={navToggleHandler}>
          <span />
        </Link>
        <Link to="#" className="b-brand">
          <img id="main-logo" src={logo} alt="" className="logo" />
        </Link>
        <Link to="#" className={moreClass.join(' ')} onClick={() => setMoreToggle(!moreToggle)}>
          <i className="feather icon-more-vertical" />
        </Link>
      </div>
      <div style={{ justifyContent: 'end' }} className={collapseClass.join(' ')}>
        <NavLeft />
        <NavRight />
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className={headerClass.join(' ')} style={{ zIndex: 1009 }}>
        {navBar}
      </header>
    </React.Fragment>
  );
};

export default NavBar;
