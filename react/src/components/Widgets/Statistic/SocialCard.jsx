import React from 'react';

// react-botstrap
import { Card, Button } from 'react-bootstrap';

// ==============================|| SOCIAL CARD ||============================== //

const SocialCard = ({ params }) => {
  let iconClass = ['d-block f-40'];
  if (params.class) {
    iconClass = [...iconClass, 'text-c-' + params.class];
  }
  if (params.icon) {
    iconClass = [...iconClass, params.icon];
  }

  return (
    <Card>
      <Card.Body className="text-center">
        <i className={iconClass.join(' ')} />
        <h4 className="m-t-20">
          <span className={'text-c-' + params.class}>{params.primaryTitle}</span> {params.primaryText}
        </h4>
        <p className="m-b-20">{params.secondaryText}</p>
        <Button variant={params.variant} className="btn-primary btn-sm">
          {params.label}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SocialCard;
