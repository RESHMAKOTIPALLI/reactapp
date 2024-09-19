import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import Sidenav from './Sidenav';

const Cameras = () => {
    // Sample data for the bar chart
    const data = {
        labels: ['Camera A', 'Camera B', 'Camera C', 'Camera D'],
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
                    <h1 className="mt-4">Cameras</h1>
                    <Bar data={data} options={{ maintainAspectRatio: false }} />

                    <Row className="mt-4">
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/camera-a.jpg" />
                                <Card.Body>
                                    <Card.Title>Camera A</Card.Title>
                                    <Card.Text>
                                        High resolution and great performance.
                                    </Card.Text>
                                    <Link to="/cameras/camera-a">
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/camera-b.jpg" />
                                <Card.Body>
                                    <Card.Title>Camera B</Card.Title>
                                    <Card.Text>
                                        Compact and lightweight, perfect for travel.
                                    </Card.Text>
                                    <Link to="/cameras/camera-b">
                                        <Button variant="primary">View Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src="path/to/camera-c.jpg" />
                                <Card.Body>
                                    <Card.Title>Camera C</Card.Title>
                                    <Card.Text>
                                        Professional features at an affordable price.
                                    </Card.Text>
                                    <Link to="/cameras/camera-c">
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

export default Cameras;
