import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewAccountForm from './components/NewAccountForm';
import NewProjectForm from './components/NewProjectForm';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
// Components from video
import SignInF from './components/SignInF';
import AuthDetails from './components/AuthDetails';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../src/firebase'

import './App.css';

// const BACKEND_URL = "http://127.0.0.1:5000";
const BACKEND_URL = "https://jeweltime-api.onrender.com";

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
  // Variable to hold object for metals
  const [metals, setMetals] = useState(undefined)


  // Route tested and it's working!!!!
  const createNewAccount = (newAccount) => {
    console.log(newAccount)
    axios
      .post(`${BACKEND_URL}/accounts`, newAccount)
      .then( (response) => {
        setSelectedAccount(response.data)
        console.log('createNewAccount success', response.data);

        console.log("HERE IS THE SELECTED ACCOUNT STATE VARIABLE&&&&&&&&&&&&&&&&")
        console.log(selectedAccount);

      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

// Route tested and it's working!!!!
  const updateSelectedAccount = (userInfo) => {
    setSelectedAccount(userInfo);
  };
  
  // Route tested and it's working!!!
  const updateAccount = (account) => {

    console.log(account)
    const accountId = account.accountId
    axios
      .put(`${BACKEND_URL}/accounts/${accountId}`, account)
      .then( (response) => {
        setSelectedAccount(response.data)
        console.log('updateAccount success', response.data);
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Route tested and it's working!!!
  const deleteAccount = (accountId) => {
    axios
    .delete(`${BACKEND_URL}/accounts/${accountId}`)
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

  const login = (firebaseUserCredential) => {

    // Signed in 
    const user = firebaseUserCredential;
    console.log("firebaseUserCredential:", user)
    let userFirebaseId = user.uid
    console.log("user id!:", userFirebaseId)

    const userId = {"firebaseId": userFirebaseId};

    if (userFirebaseId !== undefined && userFirebaseId !== '') {
      axios
        .post(`${BACKEND_URL}/signin`, userId)
        .then( (response) => {
          console.log("response data!", response.data)
          setSelectedAccount(response.data)
          console.log('Sign in account success', response.data);
        })
    }
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log("Entered onAuthStateChanged")
        if (user) {
            login(user)
        }
    });

    return () => {
        listen();
    }
}, [])

  // Route to validate sign in!!!
  const validateUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("INSIDE VALIDATE USER")
          login(userCredential.user)
        })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Route to create a project working!!!
  const createNewProject = (newProject) => {
    console.log('THIS IS THE SELECTED ACCOUNT!!!!!!!!!!!!!!!!!')
    console.log(selectedAccount);

    if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
      newProject["accountId"] = selectedAccount.accountId
      axios
      .post(`${BACKEND_URL}/projects`, newProject)
      .then( (response) => {
        // Before I was overwriting displayedProjects with an Object (new single project)
        // Hence the map function couldn't iterate and it was throwing an error
        const projectsToRender = displayedProjects.map( project => {
            return {...project}
        })
        projectsToRender.push(response.data)
        console.log("newDisplayedProjects:", projectsToRender)
        setDisplayedProjects(projectsToRender)
        console.log('createNewProject success', response.data);
        setSelectedProject(INITIAL_PROJECT_DATA)
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
      console.log("selectedAccount.accountId", selectedAccount.accountId)

      if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
        const accountId = selectedAccount.accountId
        console.log("account id:", accountId)

        // Only if user id is present make the call
        axios
        .get(`${BACKEND_URL}/accounts/${accountId}/projects`)
        .then( (response) => {
          
          console.log("projects user", response.data)
          
          setDisplayedProjects(response.data);
          console.log('getProjects success!', displayedProjects)
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
      .put(`${BACKEND_URL}/projects/${projectId}`, project)
      .then( (response) => {
        
        console.log('updateProject success', response.data);
        const updatedProjects = displayedProjects.map( project => {
          if (project.projectId === projectId) {
            return response.data
          } else {
            return {...project}
          }
        })
        setDisplayedProjects(updatedProjects)
        setSelectedProject(INITIAL_PROJECT_DATA)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  // Route to delete a project works!!!
  const deleteProject = (projectId) => {
    axios
    .delete(`${BACKEND_URL}/projects/${projectId}`)
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
  
  // Function to format metals and exclude the timestamp
  const formatMetalsData = (metals) => {
    const metalsNames = ["gold", "silver", "platinum", "palladium"]
    const metalsFormatted = {}
    
    metalsNames.forEach( (metalName) => {
      metals.forEach( (metal) => {
        if (metalName in metal  && metalName !== "timestamp") {
          metalsFormatted[metalName] = parseFloat(metal[metalName]);
        }
      });
    });

    return metalsFormatted
  }

  // Route to get Metals, working!!!
  useEffect( () => {
      axios
      .get(`${BACKEND_URL}/prices`)
      .then( (response) => {
        const metalsData = response.data;

        let metalsToRender = formatMetalsData(metalsData)
        setMetals(metalsToRender)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }, [])

  return (
      <div className="App">
          <div className='content'>
            <nav className='NavBar'>
              <NavBar />
            </nav>
            <Routes>
              <Route exact path="/home" element={<Home
                metals={metals} />}/>
              <Route path="/signup" element={ <NewAccountForm 
                selectedAccount={selectedAccount}
                createNewAccount={createNewAccount}
                updateAccount={updateAccount}
                deleteAccount={deleteAccount}
                setSelectedAccount={updateSelectedAccount}
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
              <AuthDetails 
                setDisplayedProjects={setDisplayedProjects}
                setSelectedAccount={setSelectedAccount}
              />
            </div>
            <div>
              <Footer/>
            </div>
      </div>
  );
}
export default App;


