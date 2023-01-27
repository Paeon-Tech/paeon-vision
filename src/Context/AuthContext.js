import { createContext, useContext, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '../Firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const signInWithGithub = () => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const userLogout = () => {
        setUser(false)
        return signOut(auth)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/',
        })
    }

    return (
        <UserContext.Provider
            value={{
                createUser,
                user,
                userLogout,
                userLogin,
                setUser,
                signInWithGoogle,
                forgotPassword,
                signInWithGithub,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}
