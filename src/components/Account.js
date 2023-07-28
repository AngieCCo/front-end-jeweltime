import React from 'react';
import './Account.css'

const Account = (props) => {

    // Function linked to API call deleteAccount
    const toggleDelete = () => {
        console.log('delete button clicked!')
        props.deleteAccount(props.id)
    };

    return (
        <section className='account__container'>
            <Account
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            zipcode={props.zipcode}
            ></Account>
            <p>{props.firstName}</p>
            <ul>
                <li><button onClick={toggleDelete}>Delete Account</button></li>
            </ul>
        </section>
        
    );
}

export default Account;