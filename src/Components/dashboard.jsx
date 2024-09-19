import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Sidenav from './Sidenav'; 

const Dashboard = () => {
  const data = {
    labels: ['Cameras', 'Laptops', 'Headphones', 'Accessories', 'Other'],
    datasets: [
      {
        label: 'Sales',
        data: [150, 100, 200, 300, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const products = [
    {
      name: 'Cameras',
      price: '$25,000',
      description: 'Latest model with high resolution.',
    },
    {
      name: 'Laptops',
      price: '$50,000',
      description: 'Powerful performance for gaming and work.',
    },
    {
      name: 'Headphones',
      price: '$4,000',
      description: 'Noise-cancelling wireless headphones.',
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-dark text-white sidenav">
          <Sidenav />
        </Col>
        <Col md={10} className="p-4">
          <h1 className="mt-3">Electronic Products Dashboard</h1>
          <Row className="mt-4">
            {products.map((product, index) => (
              <Col md={4} key={index}>
                <Card className="text-center product-card">
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className="price">{product.price}</Card.Text>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Sales Overview</Card.Title>
                  <Bar data={data} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
