import React from 'react';
import './Account.css'

const Account = (props) => {

    return (
        <section className='account__container'>
            <Account
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            zipcode={props.zipcode}
            ></Account>
        </section>
    );
}

export default Account;