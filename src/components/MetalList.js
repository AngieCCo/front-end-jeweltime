import React from 'react';

const MetalList = ({ metals }) => {
    console.log("starting metal list")
    console.log("Received metals: ", metals)

    const metalItems = metals.map( (metal) => (
        <li>{metal}</li>
    ));
    return (
        <ul className='metals'>{metalItems(metals)}</ul>
    )
};
export default MetalList;