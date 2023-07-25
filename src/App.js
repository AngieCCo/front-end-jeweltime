import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './App.css';


// import ProjectList from './components/ProjectList'
import NewAccountForm from './components/NewAccountForm';
// import NewProjectForm from './components/NewProjectForm';

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
    .get('http://127.0.0.1:5000/accounts')
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
    console.log('Attempt to call post@@@@@@@@@@@')
    console.log(newAccount)
    axios
      .post('http://127.0.0.1:5000/accounts', newAccount)
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

  // Call Backend Proxy to update account
  // const updateAccount = (accountId, updatedData) => {
  //   // Def initial states and update the with useEffect
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [zipcode, setZipcode] = useState('');

    // useEffect( () => {
    //   const currentuserData = await axios.get('http://127.0.0.1:5000/accounts/123');

    //   setFirstName(currentuserData.firstName);
    //   setLastName(currentuserData.lastName);
    //   setEmail(currentuserData.email);
    //   setZipcode(currentuserData.zipcode);
    // }, [])

    // async function formData() {

    // }
    
    //   if (updateData === 'email') {
    //     accountToUpdate.email = updateData;
    //   } elif (updateData === 'zipcode') {
    //     accountToUpdate.zipcode = updateData;
    //   }
    // }
  //   axios.patch('Pending URL', formData)
  //   .then( (response) => {
  //   })
  // }
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='new-account-form__container'>
            <NewAccountForm createNewAccount={createNewAccount} />
      </section>
      <p>Hello world!</p>
    </div>
  );
}

export default App;


