import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const useLoginUser = () => {
    const { userLogin } = UserAuth()
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errname, setErrname] = useState('')
    const navigate = useNavigate()

    const loginUser = async (email, password) => {
        setIsLoading(true)
        setError('')
        setErrname('')

        try {
            await userLogin(email, password)
            setIsLoading(false)
            navigate('/home')
        } catch (error) {
            setIsLoading(false)
            switch (error.code) {
                case 'auth/network-request-failed':
                    setError('Network error please try Again')
                    break

                case 'auth/user-not-found':
                    setError('Email not found please try again')
                    setErrname('Email')
                    break

                case 'auth/wrong-password':
                    setError('Wrong password please try again')
                    setErrname('Password')
                    break

                case 'auth/invalid-email':
                    setError('Wrong email and password.')
                    setErrname('NoCredential')
                    break

                case 'auth/too-many-requests':
                    setError('Too many attempts, Try again later')
                    break

                default:
                    console.table(error)
                    setError('There is an error signing in')
            }
        }
    }

    return [error, loginUser, errname, setError, isLoading, setErrname]
}

export default useLoginUser
