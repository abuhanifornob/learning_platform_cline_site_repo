import React from 'react';
import { createContext } from 'react';
export const AuthContext=createContext();

const ContextProvider = ({children}) => {
    const user={displayName:"Abu Hanif"};
    const authInfo={user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;