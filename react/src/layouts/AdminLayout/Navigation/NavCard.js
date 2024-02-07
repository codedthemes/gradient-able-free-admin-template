import React from 'react';
import { Card } from 'react-bootstrap';

import sidebarImages from '../../../assets/images/sidebar.png';

let itemTarget = '_blank';

const NavCard = () => {
  return (
    <React.Fragment>
      <Card className="bg-transparent border">
        <Card.Body className="p-2 text-center">
          <img src={sidebarImages} className="img-radius " alt="User-Profile" />
          <h5>Gradient Pro</h5>
          <p>Checkout Gradient Premium Features</p>
          <a
            href="https://codedthemes.com/item/gradient-able-reactjs-admin-dashboard/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium"
            target={itemTarget}
            className="btn text-white btn-primary"
          >
            Download Premium
          </a>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default NavCard;
