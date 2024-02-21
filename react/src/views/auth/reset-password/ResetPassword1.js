import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logoDark from '../../../assets/images/logo-dark.png';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const ResetPassword1 = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Row className="align-items-center text-center">
              <Col>
                <Card.Body className="card-body">
                  <img src={logoDark} alt="" className="img-fluid mb-4" />
                  <h4 className="mb-3 f-w-400">Reset your password</h4>
                  <div className="input-group mb-4">
                    <input type="email" className="form-control" placeholder="Email address" />
                  </div>
                  <button className="btn btn-block btn-primary mb-4">Reset password</button>
                  <p className="mb-0 text-muted">
                    Don’t have an account?{' '}
                    <NavLink to="/auth/signup-1" className="f-w-400">
                      Signup
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword1;
