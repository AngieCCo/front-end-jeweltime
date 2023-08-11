import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap'; 
import './Home.css'; 

import jewelryBenchImg from '../assets/JewelryBench.jpg';
import ringImg from '../assets/SapphireRing.jpg'

import goldImg from '../assets/metalsGold.jpg';
import silverImg from '../assets/metalsSilver.jpg';
import platinumImg from '../assets/metalsPlatinum.jpg';
import palladiumImg from '../assets/metalsPalladium.jpg';

const metalImages = {
    gold: goldImg,
    silver: silverImg,
    platinum: platinumImg,
    palladium: palladiumImg
};

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const Home = ({ metals }) => {
    console.log("Inside home@@@@@@")
    return (
        <Container className="home-section">
            {/* Row 1 */}
            <Row className="mt-5 mb-6 custom-mb">
                <Col xs={12}>
                    <h2 className="app-description mb-4 mt-5">
                        Jewel Time: The Digital Field Notebook for Metalsmiths
                    </h2>
                    <p className="custom-mt greeting bold-text">
                        Welcome to Jewel Time
                    </p>
                    <p className="regular-text">
                        Here, jewelers and metalsmiths find a quiet corner to document each piece they create, tracing every project from its initial spark to its final polish.
                    </p>
                    <p className="regular-text">
                        Whether you're a seasoned artisan or budding enthusiast, Jewel Time serves as your trusted repository through every creation phase.
                    </p>
                    <p className="bold-text">Craft, Chronicle, Cherish with Jewel Time.</p>
                </Col>
            </Row>
            {/* Row 2 */}
            <Row className="mt-5 mb-5 align-items-center">
                <Col xs={12} md={6}>
                    <h3 className="feature-heading mb-4">
                        Stay Organized, Boost Creativity
                    </h3>
                    <p className="feature-text regular-text">
                        Never lose track of your projects. Our app helps you document every step while inspiring fresh ideas. 
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <img className='image-container' src={jewelryBenchImg} alt="Jewelry bench with tools" />
                </Col>
            </Row>
            {/* Row 3 */}
            <Row className="mt-5 mb-5 align-items-center"> 
                <Col xs={12} md={6}>
                    <img className='image-container' src={ringImg} alt="Silver sapphire ring" />
                </Col>
                <Col xs={12} md={6}>
                    <h3 className="feature-heading mb-4">
                        Market Insights
                    </h3>
                    <p className="feature-text regular-text">
                        Stay connected with real-time prices for Gold, Silver, Platinum, and Palladium
                    </p>
                </Col>
            </Row>
            {/* Row 4 */}
            {/* Conditionally render the "Precious Metal Prices" section */}
            {metals ? (
                <Row className="mt-5 mb-5">
                    <Col xs={12} className="d-flex justify-content-center mb-4">
                        <h2 className="metal-cards-title">
                            Precious Metal Prices
                        </h2>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center">
                        {Object.entries(metals).map(([metalName, metalValue]) => (
                            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={metalName}>
                                <Card className="metal-card">
                                    <Card.Img className="card-image" variant="top" src={metalImages[metalName]} />
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <Card.Title>{capitalizeFirstLetter(metalName)}</Card.Title>
                                        <Card.Text>${metalValue.toFixed(2)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Col>
                </Row>
            ) : (
                // Display loading message while waiting for API call for metal prices
                <Row className="mt-5 mb-5">
                    <Col xs={12} className="d-flex justify-content-center mb-4">
                        <h2 className="metal-cards-title">
                            🛠️ Loading Precious Metal Prices...
                        </h2>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Home;