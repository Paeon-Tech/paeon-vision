import { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    onAuthStateChanged,
    OAuthProvider,
    FacebookAuthProvider,
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

    const signInWithMicrosoft = () => {
        const provider = new OAuthProvider('microsoft.com')
        return signInWithPopup(auth, provider)
    }

    const userLogout = () => {
        return signOut(auth)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://paeonvision.tech/',
        })
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                const isAuth = {
                    isAuthenticated: true,
                    data,
                }
                localStorage.setItem('paeon-user', JSON.stringify(isAuth))
                setUser(isAuth)
            } else {
                setUser(data)
                console.log(data)
                localStorage.clear()
            }
        })
    }, [])

    return (
        <UserContext.Provider
            value={{
                createUser,
                user,
                userLogout,
                userLogin,
                signInWithGoogle,
                forgotPassword,
                signInWithFacebook,
                signInWithMicrosoft,
				setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}
