import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './AuthDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const auth = getAuth();

const INITIAL_ACCOUNT_DATA = {
    "accountId": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "zipcode": "",
    "firebaseId": "",
    "projects": []
}

const INITIAL_FORM_DATA = {
    "projectName": '',
    "description": '',
    "startedAt": '',
    "completedAt": '',
    "hoursSpent": '',
    "materialsCost": '',
    "materials": '',
    "metals": '',
    "gemstones": '',
    "shape": '',
    "jewelryType": '',
    "notes": ''
}

const AuthDetails = ( { setDisplayedProjects, setSelectedAccount }) => {

    const [authUser, setAuthUser] = useState(undefined);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(INITIAL_ACCOUNT_DATA)
            }
        });

        return () => {
            listen();
        }
    }, [])

    let navigate = useNavigate()
    const userSignOut = () => {
        signOut(auth).then(() => {
            let emptyListProjects = [INITIAL_FORM_DATA];
            setDisplayedProjects(emptyListProjects)
            setSelectedAccount(INITIAL_ACCOUNT_DATA)
            let path = '/home';
            navigate(path);
        }).catch(error => console.log(error))
    }

    return (
        <div>
        <br/>
        {authUser ? <><p>{`Signed In as ${authUser.email}`}</p>
        <button onClick={userSignOut} className="btn btn-success w-95 mt-2">Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails;