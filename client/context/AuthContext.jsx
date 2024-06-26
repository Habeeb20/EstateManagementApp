import {createContext, useEffect, useState} from 'react'
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage("user")     || null)
    )

    const updateUser = (data) => {
        setCurrentUser(data);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])
    return <AuthContext.Provider value ={{}}>(children)</AuthContext.Provider>
}