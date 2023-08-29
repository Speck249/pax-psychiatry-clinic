import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userLogOut = () => {
        userLogOut(auth).then(() => {
            console.log('Logged Out Succeffully')
        }).catch(error => console.log(error))
    }

    return (
        <>{authUser ? <><p>{`Logged In as ${authUser.email}`}</p><button onClick={userLogOut}>Log Out</button></> : <p>Logged Out</p>}</>
    );
};

export default AuthDetails;