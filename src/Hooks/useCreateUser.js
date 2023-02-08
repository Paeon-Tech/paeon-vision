import { useState } from 'react'
import { UserAuth } from '../Context'
import { firestore } from '../Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { sendEmailVerification } from 'firebase/auth'

const useCreateUser = () => {
    const { createUser } = UserAuth()
    const [error, setError] = useState('')
    const [errname, setErrname] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const registerUser = async (userData) => {
        const { email, password, fullName } = userData
        setIsLoading(true)
        setErrname('')
        setError('')

        try {
            const response = await createUser(email, password)
            const user = response.user
            await sendEmailVerification(response.user)

            await setDoc(doc(firestore, 'users', user.uid), {
                uid: user.uid,
                email,
                fullName,
            })
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            switch (error.code) {
                case 'auth/network-request-failed':
                    setError('Network error please try Again')
                    break

                case 'auth/email-already-in-use':
                    setError('Email already in use')
                    setErrname('Email')
                    break

                case 'auth/weak-password':
                    setError('Password should be at least 6 characters long')
                    setErrname('Password')
                    break

                case 'auth/invalid-email':
                    setError('Invalid email please try again')
                    setErrname('Email')
                    break

                default:
                    setError(
                        'Please contact your administrator or try again later'
                    )
            }
        }
    }

    return [setError, error, registerUser, errname, isLoading]
}

export default useCreateUser
