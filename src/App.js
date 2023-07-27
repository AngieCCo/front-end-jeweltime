import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewAccountForm from './components/NewAccountForm';
import NewProjectForm from './components/NewProjectForm';
import SignIn from './components/SignIn';
import ProjectsList from './components/ProjectsList';
import './App.css';

const INITIAL_ACCOUNT_DATA = {
  "accountId": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "zipcode": "",
  "projects": []
}

const INITIAL_PROJECT_DATA = [] ;

function App() {

  const [selectedAccount, setSelectedAccount] = useState(INITIAL_ACCOUNT_DATA);
  const [displayedProjects, setDisplayedProjects] = useState(INITIAL_PROJECT_DATA);


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

  // Route tested and it's working!!!!
  const updateAccount = (account) => {

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

  // Route to validate sign in working!!!
  const validateUser = (username, password) => {

    const userInfo = {
      "user": username,
      "password": password
    }
    console.log("user info!:", userInfo)
    axios
      .post('http://127.0.0.1:5000/signin', userInfo)
      .then( (response) => {
        console.log("response data!", response.data["account"])
        setSelectedAccount(response.data["account"])
        console.log('Sign in account success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Routes for Projects
  const createNewProject = (newProject) => {
    console.log(selectedAccount.accountId)
    if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
      newProject["accountId"] = selectedAccount.accountId
    }
    else {
      return "Please Sign Up to create an account"
    }
    axios
      .post(`http://127.0.0.1:5000/projects`, newProject)
      .then( (response) => {
        setDisplayedProjects(response.data["project"])
        console.log('createNewProject success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // const getProjects = (accountId) => {
  //   axios.get(`http://127.0.0.1:5000/accounts/${accountId}`)
  //   .then( (response) => {
  //     console.log('getProjects success!', response.data.projects)
  //     const projectsToDisplay = []
  //     response.data.projects.forEach(project => {
  //       projectsToDisplay.push(project)
  //     });
  
  //     setDisplayedProjects(projectsToDisplay);
  //     setSelectedAccount(response.data)
  //     console.log('getProjects success!', displayedProjects)
  //     console.log('getAccount success 2!', selectedAccount)
  //   })
  //   .catch( (error) => {
  //     console.log('error', error)
  //   })
  // }

  // const updateProject = (project) => {

  //   console.log(project)
  //   const projectId = project.id
  //   axios
  //     .put(`http://127.0.0.1:5000/accounts/${accountId}/projects`, project)
  //     .then( (response) => {
  //       setDisplayedProjects(response.data)
  //       console.log('updateAccount success', response.data);
  //     })
  //     .catch( (error) => {
  //       console.log('error', error)
  //     })
  // }


  return (
      
      <div className="App">
        <h1>Jeweltime</h1>
          <div className='content'>
            <nav className='NavBar'>
              <NavBar />
            </nav>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="/signup" element={ <NewAccountForm 
                selectedAccount={selectedAccount}
                createNewAccount={createNewAccount} 
                updateAccount={updateAccount}
                />} />
              <Route path="/newproject" element={ <NewProjectForm
                createNewProject={createNewProject}
              />} />
              <Route path="/userprojects" element={ <ProjectsList
                displayedProjects={displayedProjects}
              />} />
              <Route path="/signin" element={ <SignIn
                validateUser={validateUser}
              />} />
            </Routes>
          </div>
      </div>
  );
}
export default App;


