import React from 'react';
import Sidenav from './Sidenav';
import { Col, Row } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10} style={{ padding: '5%' }}>
          <div className="dash maindata">
            <h1>Dashboard</h1>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Revenue</Card.Title>
                    <Card.Text>
                      $20,000
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Users</Card.Title>
                    <Card.Text>
                      1,200
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>Orders</Card.Title>
                    <Card.Text>
                      300
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col>
                <div className="chart">
                  <h3>Chart Placeholder</h3>
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col>
                <div className="table">
                  <h3>Table Placeholder</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
