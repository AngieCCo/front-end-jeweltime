import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewAccountForm from './components/NewAccountForm';
import NewProjectForm from './components/NewProjectForm';
import ProjectsList from './components/ProjectsList';
// Components from video
import SignInF from './components/SignInF';
import AuthDetails from './components/AuthDetails';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../src/firebase'

import './App.css';

const INITIAL_ACCOUNT_DATA = {
  "accountId": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "zipcode": "",
  "firebaseId": "",
  "projects": []
}

const INITIAL_PROJECT_DATA = undefined;

function App() {

  const [selectedAccount, setSelectedAccount] = useState(INITIAL_ACCOUNT_DATA);
  const [displayedProjects, setDisplayedProjects] = useState(INITIAL_PROJECT_DATA);
  const [selectedProject, setSelectedProject] = useState(undefined)


  // Route tested and it's working!!!!
  // const getAccount = (accountId) => {
  //   axios
  //   .get(`http://127.0.0.1:5000/accounts/${accountId}`)
  //   .then( (response) => {
  //     const accountUser = response.data
  //     setSelectedAccount(accountUser)
  //     console.log("getAccount success!", selectedAccount)
  //   })
  //   .catch( (error) => {
  //     console.log('error', error)
  //   })
  // };

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
  // CHANGE ROUTE!!!
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

  // Route tested and it's working!!!
  const deleteAccount = (accountId) => {
    axios
    .delete(`http://127.0.0.1:5000/accounts/${accountId}`)
    .then( (response) => {
      console.log("Response!:", response.data)
      const removedAccount = INITIAL_ACCOUNT_DATA;
      const removedProjects = INITIAL_PROJECT_DATA

      console.log('deleteAccount success!', response.data)
      setSelectedAccount(removedAccount);
      setDisplayedProjects(removedProjects)
    })
    .catch( (error) => {
      console.log('Could not delete project', error)
    });
  }

  // Route to validate sign in!!!
  const validateUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("INSIDE VALIDATE USER")
          // Signed in 
          const user = userCredential.user;
          console.log("userCredential:", user)
          let userFirebaseId = user.uid
          console.log("user id!:", userFirebaseId)

          const userId = {"firebaseId": userFirebaseId};

          if (userFirebaseId !== undefined && userFirebaseId !== '') {
            axios
              .post(`http://127.0.0.1:5000/signin`, userId)
              .then( (response) => {
                console.log("response data!", response.data["account"])
                setSelectedAccount(response.data["account"])
                console.log('Sign in account success', response.data);
              })
          }
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

  // Route to update a project works!!!!
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

  // Route to delete a project works!!!
  const deleteProject = (projectId) => {
    axios
    .delete(`http://127.0.0.1:5000/projects/${projectId}`)
    .then( (response) => {
      console.log("Response!:", response.data)
      const updateProjects = displayedProjects.filter(function (displayedProjects) {
        return displayedProjects.projectId !== projectId;
      });

      console.log('deleteProject success!', response.data)
      setDisplayedProjects(updateProjects);
    })
    .catch( (error) => {
      console.log('Could not delete project', error)
    });
  }

  return (
      
      <div className="App">
        <h1>Jeweltime</h1>
          <div className='content'>
            <nav className='NavBar'>
              <NavBar />
            </nav>
            <Routes>
              <Route path="home" element={<Home />}/>
              <Route path="/signup" element={ <NewAccountForm 
                selectedAccount={selectedAccount}
                createNewAccount={createNewAccount} 
                updateAccount={updateAccount}
                deleteAccount={deleteAccount}
                />} />
              <Route path="/newproject" element={ <NewProjectForm
                createNewProject={createNewProject}
                selectedProject={selectedProject}
                updateProject={updateProject}
              />} />
              <Route path="/signin" element={ <SignInF
                validateUser={validateUser}
              />} />
              <Route path="/userprojects" element={ <ProjectsList
                displayedProjects={displayedProjects}
                setSelectedProject={setSelectedProject}
                deleteProject={deleteProject}
              />} />
            </Routes> 
          </div>
            <div className='w-100' style={ { maxWidth: '400px' }}>
              <AuthDetails />
            </div>
      </div>
  );
}
export default App;


