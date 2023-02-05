import { useState } from 'react'
import { UserAuth } from '../Context/AuthContext'
import { firestore } from '../Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { sendEmailVerification } from 'firebase/auth'

const useCreateUser = () => {
    const { createUser } = UserAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState('')
    const [errname, setErrname] = useState('')

    const registerUser = async (userData) => {
        const { email, password, fullName } = userData
        setLoading('Loading')
        setErrname('')
        setSuccess('')
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

            setSuccess('Account Created. Please check your email for verification')
            setLoading('')
        } catch (error) {
            setLoading('')
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

    return [success, loading, error, registerUser, errname]
}

export default useCreateUser
