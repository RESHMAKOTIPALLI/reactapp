import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Sidenav from '../Components/Sidenav';


const Laptops = () => {
    // Sample data for the bar chart
    const data = {
        labels: ['Laptop A', 'Laptop B', 'Laptop C', 'Laptop D'],
        datasets: [
            {
                label: 'Sales',
                data: [120, 150, 100, 80],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Sidenav />
                </Col>
                <Col md={10}>
                    <h1 className="mt-4">Laptops</h1>
                    <Bar data={data} options={{ maintainAspectRatio: false }} />

                    <Row className="mt-4">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/laptop-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Laptop 1</Card.Title>
                                    <Card.Text>
                                        High resolution and great performance.
                                    </Card.Text>
                                    <Link to="/laptops/laptop-1">
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/laptop-2.jpg" />
                                <Card.Body>
                                    <Card.Title>Laptop 2</Card.Title>
                                    <Card.Text>
                                        Compact and lightweight, perfect for travel.
                                    </Card.Text>
                                    <Link to="/laptops/laptop-2">
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/laptop-3.jpg" />
                                <Card.Body>
                                    <Card.Title>Laptop 3</Card.Title>
                                    <Card.Text>
                                        Professional features at an affordable price.
                                    </Card.Text>
                                    <Link to="/laptops/laptop-3">
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Laptops;
