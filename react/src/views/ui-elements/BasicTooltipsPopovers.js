import React from 'react';
import { Row, Col, Card, Button, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';
import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const BasicTooltipsPopovers = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging. right?
      </Popover.Body>
    </Popover>
  );

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.netlify.app/components/overlays/#tooltips"
          />
        </Col>
      </Row>
      <Row className="btn-page">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Tooltip</Card.Title>
            </Card.Header>
            <Card.Body>
              <OverlayTrigger placement="top" overlay={<Tooltip id={`tooltip-top`}>Tooltip on top</Tooltip>}>
                <Button variant="light">Top</Button>
              </OverlayTrigger>
              <OverlayTrigger placement="right" overlay={<Tooltip id={`tooltip-right`}>Tooltip on right</Tooltip>}>
                <Button variant="success">Right</Button>
              </OverlayTrigger>
              <OverlayTrigger placement="left" overlay={<Tooltip id={`tooltip-left`}>Tooltip on left</Tooltip>}>
                <Button variant="primary">Left</Button>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Tooltip on bottom</Tooltip>}>
                <Button variant="warning">Bottom</Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <i>Tooltip</i> <u>with</u> <strong>HTML</strong>
                  </Tooltip>
                }
              >
                <Button variant="primary">HTML Tooltip</Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.netlify.app/components/overlays/#popovers"
          />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Popover</Card.Title>
            </Card.Header>
            <Card.Body>
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button variant="light">Top</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Button variant="warning">Bottom</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Right</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="primary">Left</Button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <Button variant="primary">HTML Popover</Button>
              </OverlayTrigger>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicTooltipsPopovers;
