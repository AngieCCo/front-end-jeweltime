import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NewAccountForm from './components/NewAccountForm';
import NewProjectForm from './components/NewProjectForm';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import SignInF from './components/SignInF';
import AuthDetails from './components/AuthDetails';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../src/firebase';
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
  const [metals, setMetals] = useState(undefined)


  const createNewAccount = (newAccount) => {
    
    axios
      .post(`${BACKEND_URL}/accounts`, newAccount)
      .then( (response) => {
        setSelectedAccount(response.data)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  const updateSelectedAccount = (userInfo) => {
    setSelectedAccount(userInfo);
  };
  
  const updateAccount = (account) => {

    const accountId = account.accountId
    axios
      .put(`${BACKEND_URL}/accounts/${accountId}`, account)
      .then( (response) => {
        setSelectedAccount(response.data)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  const deleteAccount = (accountId) => {
    axios
    .delete(`${BACKEND_URL}/accounts/${accountId}`)
    .then( (response) => {
      const removedAccount = INITIAL_ACCOUNT_DATA;
      const removedProjects = INITIAL_PROJECT_DATA

      setSelectedAccount(removedAccount);
      setDisplayedProjects(removedProjects)
    })
    .catch( (error) => {
      console.log('Could not delete project', error)
    });
  }

  const login = (firebaseUserCredential) => {

    const user = firebaseUserCredential;
    let userFirebaseId = user.uid

    const userId = {"firebaseId": userFirebaseId};

    if (userFirebaseId !== undefined && userFirebaseId !== '') {
      axios
        .post(`${BACKEND_URL}/signin`, userId)
        .then( (response) => {
          setSelectedAccount(response.data)
        })
    }
  }

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
            login(user)
        }
    });

    return () => {
        listen();
    }
}, [])

  const validateUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          login(userCredential.user)
        })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  const createNewProject = (newProject) => {

    if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
      newProject["accountId"] = selectedAccount.accountId
      axios
      .post(`${BACKEND_URL}/projects`, newProject)
      .then( (response) => {
        const projectsToRender = displayedProjects.map( project => {
            return {...project}
        })
        projectsToRender.push(response.data)
        setDisplayedProjects(projectsToRender)
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

  useEffect(() => {
    const getProjects = () => {

      if (selectedAccount.accountId && selectedAccount.accountId !== undefined) {
        const accountId = selectedAccount.accountId

        axios
        .get(`${BACKEND_URL}/accounts/${accountId}/projects`)
        .then( (response) => {
          
          setDisplayedProjects(response.data);

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


  const updateProject = (project) => {

    const projectId = project.projectId
    console.log(projectId)
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
        console.log(updatedProjects)
        setDisplayedProjects(updatedProjects)
        setSelectedProject(INITIAL_PROJECT_DATA)
      })
      .catch( (error) => {
        console.log('error', error)
      })
  }

  const deleteProject = (projectId) => {
    axios
    .delete(`${BACKEND_URL}/projects/${projectId}`)
    .then( (response) => {
      const updateProjects = displayedProjects.filter(function (displayedProjects) {
        return displayedProjects.projectId !== projectId;
      });

      setDisplayedProjects(updateProjects);
    })
    .catch( (error) => {
      console.log('Could not delete project', error)
    });
  }
  
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
      <div className="App" style={{ backgroundImage: "url(/favorite.jpg)" }}>
          <div className='content'>
            <nav className='NavBar'>
              <NavBar />
            </nav>
            <Routes>
              <Route exact path="/home" element={<Home
                metals={metals} />}/>
              <Route exact path="/" element={<Home
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
              <Map
                selectedAccount={selectedAccount}
              />
            </div>
            <div>
              <Footer/>
            </div>
      </div>
  );
}
export default App;


