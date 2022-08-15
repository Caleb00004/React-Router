// File is used to maintain state of logined User.

import React from "react";
import { useNavigate } from "react-router-dom";

const {Provider, Consumer} = React.createContext()

function AuthProvider(props) {
    const [user, setUser] = React.useState()
    const profileNavigate = useNavigate()

    function login(userName) {
        setUser(userName)
        profileNavigate('/profile', {replace: true}) //To Navigates from loginPage to the profilePage 
    }

    const logout = () => {
        setUser('')
    }

    return (
        <Provider value={{user, login, logout}}>
            {props.children}
        </Provider>
    )

}

export {AuthProvider, Consumer}