import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './Home';
import NavBar from './components/NavBar';
// import ProjectList from './components/ProjectList'
import NewAccountForm from './components/NewAccountForm';
// import NewProjectForm from './components/NewProjectForm';
import './App.css';

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
  // Route tested and it's working!!!!
  const getAccount = (accountId) => {
    axios
    .get(`http://127.0.0.1:5000/accounts/${accountId}`)
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
  // Route tested and it's working!!!!
  const createNewAccount = (newAccount) => {
    console.log(newAccount)
    axios
      .post('http://127.0.0.1:5000/accounts', newAccount)
      .then( (response) => {
        setSelectedAccount(response.data["account"])
        console.log('createNewAccount success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Call Backend Proxy to update account
  // Route tested and it's working!!!!
  const updateAccount = (account) => {
    // Def initial states and update the with useEffect
    console.log(account)
    const accountId = account.accountId
    axios
      .put(`http://127.0.0.1:5000/accounts/${accountId}`, account)
      .then( (response) => {
        setSelectedAccount(response.data["account"])
        console.log('updateAccount success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }
  // Call Backend Proxy to delete an Account
  const deleteAccount = (accountId) => {
    axios.delete('Pending URL')
    .then( (response) => {
      const deleteAccount = selectedAccount.map( account => {
        if (account.id !== accountId) {
          return {...account};
        }
      });
      const filteredUpdatedAccounts = deleteAccount.filter(function (element) {
        return element !== undefined;
      });

      console.log('deleteCard success!', response.data)
      setSelectedAccount(filteredUpdatedAccounts);
    })
    .catch( (error) => {
      console.log('Could not delete task', error)
    });
  }

  
  
  return (
      
      <div className="App">
        <h1>Jeweltime</h1>
          <div className='content'>
            {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={ <NewAccountForm />} />
            </Routes> */}
            <nav className='NavBar'>
              <NavBar />
            </nav>
            <section className='new-account-form__container'>
              <NewAccountForm
              selectedAccount={selectedAccount}
              createNewAccount={createNewAccount} 
              updateAccount={updateAccount}
              />
            </section>
          </div>
        <p>Hello world!</p>
      </div>
  );

}

export default App;


