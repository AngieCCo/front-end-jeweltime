import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
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

const INITIAL_PROJECT_DATA = undefined;

function App() {

  const [selectedAccount, setSelectedAccount] = useState(INITIAL_ACCOUNT_DATA);
  const [displayedProjects, setDisplayedProjects] = useState(INITIAL_PROJECT_DATA);
  const [selectedProject, setSelectedProject] = useState(undefined)


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

  // Route to create a project working!!!
  const createNewProject = (newProject) => {
    
    if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
      newProject["accountId"] = selectedAccount.accountId
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
    else {
      console.log("Please Sign Up to create an account")
    } 
  }

  // Route to get all projects working!!!
  useEffect(() => {
    const getProjects = () => {

      console.log("Inside getProjects@@@@@@@@@@@@")
      console.log(selectedAccount)

      if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
        const accountId = selectedAccount.accountId
        console.log("account id:", accountId)

        // Only if user id is present make the call
        axios
        .get(`http://127.0.0.1:5000/accounts/${accountId}/projects`)
        .then( (response) => {
          
          console.log("projects user", response.data["projects"])
          
          setDisplayedProjects(response.data["projects"]);
          // console.log('getProjects success!', displayedProjects)
        })
        .catch( (error) => {
          console.log('error', error)
        })
      } else {
        console.log("Please log in to get access to your projects")
      }
    };
    getProjects()
  }, [selectedAccount]);

  // Route to update a project
  const updateProject = (project) => {

    console.log(project)
    const projectId = project.projectId
    axios
      .put(`http://127.0.0.1:5000/projects/${projectId}`, project)
      .then( (response) => {
        
        console.log('updateProject success', response.data);
        const updatedProjects = displayedProjects.map( project => {
          if (project.projectId === projectId) {
            return response.data["project"]
          } else {
            return {...project}
          }
        })
        setDisplayedProjects(updatedProjects)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }


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
                selectedProject={selectedProject}
                updateProject={updateProject}
              />} />
              <Route path="/userprojects" element={ <ProjectsList
                displayedProjects={displayedProjects}
                setSelectedProject={setSelectedProject}
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


