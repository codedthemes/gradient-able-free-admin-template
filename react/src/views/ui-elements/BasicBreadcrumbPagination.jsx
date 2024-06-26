import React from 'react';

// react-bootstrap
import { Row, Col, Breadcrumb, Pagination } from 'react-bootstrap';

// project import
import ModuleNotification from '../../components/Widgets/Statistic/Notification';
import Card from '../../components/Card/MainCard';

// ==============================|| BREADCRUMB & PAGINATION ||============================== //

const BasicBreadcrumbPagination = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <React.Fragment>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/breadcrumb/"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card title="Breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item to="#" active>
                Home
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item to="#" active>
                Library
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item to="#">Library</Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Card>
        </Col>
        <Col md={6}>
          <Card title="Breadcrumb Icon">
            <Breadcrumb>
              <Breadcrumb.Item to="#" active>
                <i className="feather icon-home" />
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item to="#">
                <i className="feather icon-home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item to="#" active>
                Library
              </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
              <Breadcrumb.Item to="#">
                <i className="feather icon-home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item to="#">Library</Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <ModuleNotification
            message="For more info please check the components's official documentation"
            link="https://react-bootstrap.github.io/components/pagination/"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title="Pagination">
            <Pagination>{items}</Pagination>
            <br />
            <Pagination size="lg">{items}</Pagination>
            <br />
            <Pagination size="sm">{items}</Pagination>
            <h5 className="mt-5">More Options</h5>
            <hr />
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BasicBreadcrumbPagination;
