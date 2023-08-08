import React from "react";
import { Container, Row, Col } from 'react-bootstrap'; 
import './Home.css'; 

const Home = ({ metals }) => {

    if (!metals) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            {/* Row 1 */}
            <Row className="mt-6 mb-6">
                <Col xs={2}>Column 1: Logo</Col>
                <Col xs={2}>Column 2: Home</Col>
                <Col xs={2}>Column 3: Create a Project</Col>
                <Col xs={2}>Column 4: My Projects</Col>
                <Col xs={2}>Column 5: Sign Up</Col>
                <Col xs={2}>Column 6: Sign In</Col>
            </Row>
            {/* Row 2 */}
            <Row className="mt-5 mb-5">
                <Col xs={12}>
                    <h2>Jeweltime: The Digital Field Notebook for Metalsmiths</h2>
                    <p>
                        Welcome to Jeweltime. Here, jewelers and metalsmiths find a quiet corner to document each piece they create, tracing every project from its initial spark to its final polish.
                    </p>
                    <p>
                        Whether you're a seasoned artisan or budding enthusiast, Jeweltime serves as your trusted repository through every creation phase.
                    </p>
                </Col>
            </Row>
            {/* Row 3 */}
            <Row className="mt-5 mb-5">
                <Col xs={12} md={6}>
                    <h3>Stay Organized, Boost Creativity</h3>
                    <p>
                        Never lose track of your projects. Our app helps you document every step while inspiring fresh ideas. 
                    </p>
                </Col>
                <Col xs={12} md={6}>Photo on the right (3 columns)</Col>
            </Row>
            {/* Row 4 */}
            <Row className="mt-5 mb-5"> 
                <Col xs={12} md={6}>Photo on the left (3 columns)</Col>
                <Col xs={12} md={6}>
                    <h3>Market Insights</h3>
                    <p>
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