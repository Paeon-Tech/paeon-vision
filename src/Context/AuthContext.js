import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    onIdTokenChanged,
    OAuthProvider,
    FacebookAuthProvider,
} from 'firebase/auth'
import { auth } from '../Firebase'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)

    const createUser = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }, [])

    const signInWithGoogle = useCallback(() => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }, [])

    const signInWithMicrosoft = useCallback(() => {
        const provider = new OAuthProvider('microsoft.com')
        return signInWithPopup(auth, provider)
    }, [])

    const userLogout = useCallback(() => {
        return signOut(auth)
    }, [])

    const userLogin = useCallback((email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }, [])

    const forgotPassword = useCallback((email) => {
        return sendPasswordResetEmail(auth, email, {
            url: 'http://paeonvision.tech/',
        })
    }, [])

    const signInWithFacebook = useCallback(() => {
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth, provider)
    }, [])

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, (user) => {
            if (user) {
                const isAuth = {
                    isAuthenticated: true,
                    data: user,
                }
                localStorage.setItem('paeon-user', JSON.stringify(isAuth))
                setUser(isAuth)
                console.log(user)
            } else {
                setUser(user)
                console.log(user)
                localStorage.clear()
            }
        })

        return () => {
            unsubscribe()
        }
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
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}
