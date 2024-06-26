import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// react-bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// project import
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

// assets
import logoDark from '../../../assets/images/logo-dark.png';

// ==============================|| SIGN UP 1 ||============================== //

const SignUp1 = () => {
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
                  <h4 className="mb-3 f-w-400">Sign up</h4>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email address" />
                  </div>
                  <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="custom-control custom-checkbox  text-start mb-4 mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked={false} />
                    <label className="custom-control-label mx-2" htmlFor="customCheck1">
                      Send me the <Link to="#"> Newsletter</Link> weekly.
                    </label>
                  </div>
                  <button className="btn btn-primary btn-block mb-4">Sign up</button>
                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to="/auth/signin-1" className="f-w-400">
                      Signin
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

export default SignUp1;
