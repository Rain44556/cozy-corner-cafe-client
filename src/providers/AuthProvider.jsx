import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../firbase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true);

    const signUpUser = (email,password) =>{
        setLoading(true);
return createUserWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,
        loading,
        signUpUser,
        
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;