import React from 'react';

const MetalList = ({ metals }) => {
    console.log("starting metal list")
    console.log("Received metals: ", metals)

     const listOfMetals = (metals) => {
    //     return metals.map((metal) => {
    //         return (
    //             <MetalList
    //                 metalName={metal.name}
    //                 metalPrice={metal.price}
    //             ></MetalList>
    //         );
    //     });
     };
    return (
        <ul className='metals'>{listOfMetals(metals)}</ul>
    )
};
export default MetalList;