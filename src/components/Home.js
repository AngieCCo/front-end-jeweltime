import React from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
import './Home.css'; 

import jewelryBenchImg from '../assets/JewelryBench.jpg';
import ringImg from '../assets/SapphireRing.jpg'

const Home = ({ metals }) => {

    if (!metals) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="home-section">
            {/* Row 2 */}
            <Row className="mt-5 mb-6 custom-mb">
                <Col xs={12}>
                    <h2 className="app-description mb-4 mt-5">
                        Jewel Time: The Digital Field Notebook for Metalsmiths
                    </h2>
                    <p className="custom-mt">
                        Welcome to Jewel Time. Here, jewelers and metalsmiths find a quiet corner to document each piece they create, tracing every project from its initial spark to its final polish.
                    </p>
                    <p>
                        Whether you're a seasoned artisan or budding enthusiast, Jeweltime serves as your trusted repository through every creation phase.
                    </p>
                </Col>
            </Row>
            {/* Row 3 */}
            <Row className="mt-5 mb-5 align-items-center">
                <Col xs={12} md={5}>
                    <h3 className="feature-heading mb-4">
                        Stay Organized, Boost Creativity
                    </h3>
                    <p className="feature-text">
                        Never lose track of your projects. Our app helps you document every step while inspiring fresh ideas. 
                    </p>
                </Col>
                <Col xs={12} md={7}>
                    <img className='image-container' src={jewelryBenchImg} alt="Jewelry bench with tools" />
                </Col>
            </Row>
            {/* Row 4 */}
            <Row className="mt-5 mb-5 align-items-center"> 
                <Col xs={12} md={7}>
                    <img className='image-container' src={ringImg} alt="Silver sapphire ring" />
                </Col>
                <Col xs={12} md={5}>
                    <h3 className="feature-heading mb-4">
                        Market Insights
                    </h3>
                    <p className="feature-text">
                        Stay connected with real-time prices for Gold, Silver, Platinum, and Palladium
                    </p>
                </Col>
            </Row>
            {/* Row 5 */}
            <Row className="mt-5 mb-5">
                <Col xs={1}>For Signed in as... and Sign Out button</Col>
            </Row>
            {/* Row 6 */}
            <Row className="mt-5 mb-5">
                <Col xs={1}></Col>
                <Col xs={2}>Card 1: Gold</Col>
                <Col xs={2}>Card 2: Silver</Col>
                <Col xs={2}>Card 3: Platinum</Col>
                <Col xs={2}>Card 4: Palladium</Col>
                <Col xs={1}></Col>
            </Row>
            {/* Row 7 */}
            <Row className="mt-5 mb-5">
                <Col xs={1}></Col>
                <Col xs={10}>Crafted with precision by Angie & Lyuda</Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    );

    // return (
    //     <div>
    //         <div>
    //         <h1>This is the Home Page!</h1>
    //         </div>
    //         <div>
    //             {Object.entries(metals).map(([metalName, metalValue]) => (
    //                 <h4 key={metalName}>
    //                     {`${metalName.charAt(0).toUpperCase() + metalName.slice(1)}: $${metalValue.toFixed(2)}`}
    //                 </h4>
    //             ))}
    //         </div>  
    //     </div>
    // );
}

export default Home;