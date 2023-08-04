import React from 'react';
import Metal from './Metal'

const MetalList = ({ metals }) => {
    console.log("starting metal list")
    console.log("Received metals: ", metals)

    const listOfMetals = (metals) => {
        return metals.map((metal) => {
            return (
                <Metal
                    metalName={metal.name}
                    metalPrice={metal.price}
                ></Metal>
            );
        });
    };
    return (
        <ul className='metals'>{listOfMetals(metals)}</ul>
    )
};
export default MetalList;