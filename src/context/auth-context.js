import React, { useState, createContext } from 'react'

export const AuthContext = createContext({
    isAuth: false,
    login: () => {},
    // user: { }
})

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const [userObj, setUserObj] = useState()

    const loginHandler =() => {
        // validation for username / password 
        //after firebase login... it will return a promise (user object)
        //setUserObj(response.data)
        setIsAuthenticated(true)
    }

    return(
        <AuthContext.Provider value={{ 
            isAuth: isAuthenticated, 
            // user: userObj, 
            login: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
