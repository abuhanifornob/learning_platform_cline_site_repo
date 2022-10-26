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
    
    const sigInWithGoogle=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const signInWithGithub=(gitHubProvider)=>{
        return signInWithPopup(auth,gitHubProvider)

    }
    const createUserEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userUpdateProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loginUser=>{
            setUser(loginUser)
        })
    return ()=>{
        unsubscribe();
    }
    },[])

    const authInfo={user,signInEmailAndPassword,sigInWithGoogle,signInWithGithub,createUserEmailAndPassword,userUpdateProfile,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;