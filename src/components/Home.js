import React from "react";

const Home = ({ metals }) => {

    if (!metals) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
            <h1>This is the Home Page!</h1>
            </div>
            <div>
                {Object.entries(metals).map(([metalName, metalValue]) => (
                    <h4 key={metalName}>
                        {`${metalName.charAt(0).toUpperCase() + metalName.slice(1)}: $${metalValue.toFixed(2)}`}
                    </h4>
                ))}
            </div>  
        </div>
    );
}

export default Home;