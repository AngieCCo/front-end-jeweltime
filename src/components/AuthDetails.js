import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

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

const AuthDetails = () => {

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

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful')
        }).catch(error => console.log(error))
    }


    return (
        <div>
        {authUser ? <><p>{`Signed In as ${authUser.email}`}</p>
        <button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails;