import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { Link, useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';



const Dashboard = () => {
    const navigate = useNavigate();

    // Sample data for charts
    const dailySalesData = [
        { day: 'Mon', sales: 4000 },
        { day: 'Tue', sales: 3000 },
        { day: 'Wed', sales: 2000 },
        { day: 'Thu', sales: 2780 },
        { day: 'Fri', sales: 1890 },
        { day: 'Sat', sales: 2390 },
        { day: 'Sun', sales: 3490 },
    ];

    const websiteViewsData = [
        { hour: '00:00', views: 100 },
        { hour: '01:00', views: 200 },
        { hour: '02:00', views: 300 },
        { hour: '03:00', views: 400 },
        { hour: '04:00', views: 500 },
        { hour: '05:00', views: 600 },
        { hour: '06:00', views: 700 },
    ];

    // Example product data
    const NewData1 = [
        { id: 1, name: 'Camera A', image: 'path/to/cameraA.jpg' },
        { id: 2, name: 'Camera B', image: 'path/to/cameraB.jpg' },
        { id: 3, name: 'Camera C', image: 'path/to/cameraC.jpg' },
    ];

    const NewData2 = [
        { id: 1, name: 'Headphone A', image: 'path/to/headphoneA.jpg' },
        { id: 2, name: 'Headphone B', image: 'path/to/headphoneB.jpg' },
        { id: 3, name: 'Headphone C', image: 'path/to/headphoneC.jpg' },
    ];

    const NewData3 = [
        { id: 1, name: 'Laptop A', image: 'path/to/laptopA.jpg' },
        { id: 2, name: 'Laptop B', image: 'path/to/laptopB.jpg' },
        { id: 3, name: 'Laptop C', image: 'path/to/laptopC.jpg' },
    ];

    const handleMarqueeClick = () => {
        navigate('/best');
    };

    return (
        <div className="dashboard-container">
            <Row>
                <Col sm={2} className="sidenav-col">
                    <Sidenav />
                </Col>
                <Col sm={10} className="main-content-col">
                    {/* Charts Section */}
                    <Row className="charts-section mb-4">
                        <Col md={6} className="chart-col">
                            <h3>Daily Sales</h3>
                            <LineChart
                                width={600}
                                height={300}
                                data={dailySalesData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sales" stroke="#ff7300" strokeWidth={3} />
                            </LineChart>
                        </Col>
                        <Col md={6} className="chart-col">
                            <h3>Website Views by Hour</h3>
                            <BarChart
                                width={600}
                                height={300}
                                data={websiteViewsData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="hour" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="views" fill="#0088fe" />
                            </BarChart>
                        </Col>
                    </Row>

                    {/* Marquee Section */}
                    <div className="marquee-container" onClick={handleMarqueeClick}>
                        <div className="marquee-text">
                            MEGA-DISCOUNT ON THE BEST SELLERS OF THE YEAR
                        </div>
                    </div>

                    {/* Header for Product Sections */}
                    <h2 className="products-header">BEST SELLERS</h2>
                    <h2 className="products-header">OUR PRODUCTS</h2>

                    <div className="dash maindata">
                        {/* Products Section 1 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData1.map((e) => (
                                    <div className='productdata' key={e.id}>
                                        <Link to={`/camera/${e.id}`}>
                                            <img src={e.image} alt={e.name} className="product-img" />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/camera'><p>View More</p></Link>
                            </div>
                        </div>

                        {/* Products Section 2 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData2.map((e) => (
                                    <div className='productdata' key={e.id}>
                                        <Link to={`/headphone/${e.id}`}>
                                            <img src={e.image} alt={e.name} className="product-img" />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/headphone'><p>View More</p></Link>
                            </div>
                        </div>

                        {/* Products Section 3 */}
                        <div className="products-section">
                            <div className="products-container">
                                {NewData3.map((e) => (
                                    <div className='productdata' key={e.id}>
                                        <Link to={`/laptop/${e.id}`}>
                                            <img src={e.image} alt={e.name} className="product-img" />
                                            <p>{e.name}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="view-more-container">
                                <Link to='/laptop'><p>View More</p></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
