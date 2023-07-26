import React from 'react';
import PropTypes from 'prop-types';
import './Account.css'

const Account = (props) => {

    // Function toggleDelete
    // Function linked to API call deleteAccount
    const toggleDelete = () => {
        console.log('delete button clicked!')
        props.deleteAccount(props.id)
    };

    // Functions toggleUpdate
    // Functions linked to API call updateAccount
    
    const toggleUpdateZipcode = () => {
        console.log('Update Zipcode button clicked!')
        props.updateAccountZipcode(props.id, props.zipcode)
    }

    return (
        <section className='account__container'>
            <Account
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            zipcode={props.zipcode}
            // updateUnlikes={props.updateUnlikes}
            ></Account>
            <p>{props.firstName}</p>
            <ul>
                <li>Update your email or zipcode</li>
                <li><button onClick={toggleUpdateZipcode}>Update Zipcode</button></li>
                <li><button onClick={toggleDelete}>Delete Account</button></li>
            </ul>
        </section>
        
    );
}

export default Account;