import React from 'react';
import PropTypes from 'prop-types';
import './Account.css'

const accountData = (props) => {
    account = props.account;

    const getAccount = (account) => {
        return (
            <section className='account__container'>
                <Account
                id={account.id}
                firstName={account.firstName}
                lastName={account.lastName}
                email={account.email}
                zipcode={account.zipcode}
                // updateUnlikes={props.updateUnlikes}
                ></Account>
            </section>
        );
    }
    
}