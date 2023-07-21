import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import ProjectList from './components/ProjectList'
import NewAccountForm from './components/NewAccountForm';
import NewProjectForm from './components/NewProjectForm';

const INITIAL_ACCOUNT_DATA = {
  "account_id": "",
  "first_name": "",
  "last_name": "",
  "email": "",
  "zipcode": "",
  "projects": []
}

const INITIAL_PROJECT_DATA = [] ;

function App() {

  const [selectedAccount, setSelectedAccount] = useState(INITIAL_ACCOUNT_DATA);
  const [displayedProjects, setDisplayedProjects] = useState(INITIAL_PROJECT_DATA);

  // Call Backend Proxy to get Account
  const getAccount = (accountId) => {
    axios
    .get('backend URL pending - Route needs ID to make the request')
    .then( (response) => {
      const accountUser = response.data
      setSelectedAccount(accountUser)
      console.log("getAccount success!", selectedAccount)
    })
    .catch( (error) => {
      console.log('error', error)
    })
  };

  // Call Backend Proxy to create an Account
  const createAccount = (newAccount) => {
    axios
      .post('Backend URL pending ')
      .then( (response) => {
        getAccount();
        console.log('createNewAccount success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Call Backend Proxy to delete an Account
  const deleteAccount = (accountId) => {
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
