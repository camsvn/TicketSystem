import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const localAuthData = localStorage.getItem('isAuth');
    const localUserData = localStorage.getItem('user');
    const [isAuthenticated, setIsAuthenticated] = useState(localAuthData? Boolean(JSON.parse(localAuthData)): false);
    const [user, setUser] = useState(localAuthData? JSON.parse(localUserData): null);

    useEffect(()=>{
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated))
        localStorage.setItem('user', JSON.stringify(user))
    }, [isAuthenticated, user]);

    useEffect(() => {
    axios.get('/api/users/authchecker')
    .then((res)=> {
        setUser(res.data)
        setIsAuthenticated(true)
    })
    .catch((err)=>{
        if(err.response.status===401){        
        setUser(null)
        setIsAuthenticated(false)
        }
    })
    }, [])

    const handleAuthentication = (isAuthenticated,data) =>{
        setUser(data);
        setIsAuthenticated(isAuthenticated);
    }    

    const handleLogout = () =>{
        axios.delete('/api/users/logout')
        .then((res)=> {
            if(res.status===200)
            {
            localStorage.clear();
            // handleAuthentication(false,null);
            }           
        })
        .catch((err)=>{
            console.log("Tettu Patti",err)
        })
    }

    return (
      <AuthContext.Provider
        value={{
            isAuthenticated,
            user,
            handleAuthentication,
            handleLogout
            }}
      >
        {children}
      </AuthContext.Provider>
    );
}
