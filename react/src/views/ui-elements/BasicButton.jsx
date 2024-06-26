import React from 'react';

// react-bootstrap
import { Row, Col, Button, OverlayTrigger, Tooltip, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

// project import
import ModuleNotification from '../../components/Widgets/Statistic/Notification';
import Card from '../../components/Card/MainCard';

// ==============================|| BUTTON ||============================== //

const BasicButton = () => {
  const buttonVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const buttonOptions = [
    { variant: 'primary', icon: 'feather icon-thumbs-up mx-2' },
    { variant: 'secondary', icon: 'feather icon-camera mx-2' },
    { variant: 'success', icon: 'feather icon-check-circle mx-2' },
    { variant: 'danger', icon: 'feather icon-slash mx-2' },
    { variant: 'warning', icon: 'feather icon-alert-triangle mx-2' },
    { variant: 'info', icon: 'feather icon-info mx-2' }
  ];

  const basicButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} overlay={<Tooltip>{variant}</Tooltip>}>
      <Button variant={variant} className="text-capitalize mx-2">
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const outlineButtons = buttonVariants.map((variant, idx) => (
    <OverlayTrigger key={idx} placement="top" overlay={<Tooltip className="mb-2">{'outline-' + variant}</Tooltip>}>
      <Button variant={'outline-' + variant} style={{ color: variant === 'light' ? 'black' : '' }} className="text-capitalize mx-2">
        {variant}
      </Button>
    </OverlayTrigger>
  ));

  const disabledButtons = buttonVariants.map((variant, idx) => (
    <Button key={idx} disabled variant={variant} className="text-capitalize mx-2">
      {variant}
    </Button>
  ));

  const iconButtons = buttonOptions.map((button, idx) => (
    <Button key={idx} variant={button.variant} className="text-capitalize mx-2">
      <i className={button.icon} />
      {button.variant}
    </Button>
  ));

  const outlineIconButtons = buttonOptions.map((button, idx) => (
    <Button key={idx} variant={'outline-' + button.variant} className="text-capitalize mx-2">
      <i className={button.icon} />
      {button.variant}
    </Button>
  ));

  const onlyIconButtons = buttonOptions.map((button, idx) => (
    <Button className="btn-icon" key={idx} variant={button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  const onlyOutlineIconButtons = buttonOptions.map((button, idx) => (
    <Button className="btn-icon" key={idx} variant={'outline-' + button.variant}>
      <i className={button.icon} />
    </Button>
  ));

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/buttons/"
          />
        </Col>
      </Row>
      <Row className="btn-page">
        <Col>
          <Card title="Default">
            {basicButtons}
            <OverlayTrigger overlay={<Tooltip>link</Tooltip>}>
              <Button variant="link">Link</Button>
            </OverlayTrigger>
          </Card>
          <Card title="Outline">{outlineButtons}</Card>
          <Card title="Disabled Button">
            <p>
              use <code>disabled</code> props in component <code>Button</code> to get disabled button
            </p>
            {disabledButtons}
          </Card>
        </Col>
      </Row>
      <Row className="btn-page">
        <Col md={6}>
          <Card title="Sizes [ Large ]">
            <p>
              use <code>size=&quot;lg&quot;</code> props in component <code>Button</code> to get large button
            </p>
            <Button variant="primary" size="lg">
              Large Button
            </Button>
            <Button variant="secondary" size="lg">
              Large Button
            </Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Sizes [ Small ]">
            <p>
              use <code>size=&quot;sm&quot;</code> props in component <code>Button</code> to get small button
            </p>
            <Button variant="primary" size="sm">
              Small Button
            </Button>
            <Button variant="secondary" size="sm">
              Small Button
            </Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Checkbox Button">
            <ButtonToolbar>
              <ToggleButtonGroup type="checkbox" defaultValue={1}>
                <ToggleButton variant="secondary" value={1}>
                  Checkbox
                </ToggleButton>
                <ToggleButton variant="secondary" value={2}>
                  Checkbox
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Radio Button">
            <ButtonToolbar>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton variant="secondary" value={1}>
                  Active
                </ToggleButton>
                <ToggleButton variant="secondary" value={2}>
                  Radio
                </ToggleButton>
                <ToggleButton variant="secondary" value={3}>
                  Radio
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Button With Icon">{iconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Icon Buttons">{outlineIconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Only Icon">{onlyIconButtons}</Card>
        </Col>
        <Col md={6}>
          <Card title="Outline Icon">{onlyOutlineIconButtons}</Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicButton;
