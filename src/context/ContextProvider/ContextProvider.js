import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext=createContext();
const auth=getAuth(app);

const ContextProvider = ({children}) => {
    const [user,setUser]=useState("");
    const [loading, setLoading] = useState(true);
    
    const sigInWithGoogle=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    const signInWithGithub=(gitHubProvider)=>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider)

    }
    const createUserEmailAndPassword=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailAndPassword=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userUpdateProfile=(profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profile)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loginUser=>{
            setUser(loginUser);
            setLoading(false);
        })
    return ()=>{
        unsubscribe();
    }
    },[])

    const authInfo={user,signInEmailAndPassword,sigInWithGoogle,signInWithGithub,createUserEmailAndPassword,userUpdateProfile,logOut,loading,setLoading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;