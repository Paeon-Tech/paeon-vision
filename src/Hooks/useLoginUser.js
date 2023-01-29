import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const useLoginUser = () => {
    const { userLogin, setUser } = UserAuth()
    const [error, setError] = useState('')
    const [errname, setErrname] = useState('')
    const [loading, setLoading] = useState('')
    const navigate = useNavigate()

    const loginUser = async (email, password) => {
        setLoading('Loading')
        setError('')
        setErrname('')

        try {
            const response = await userLogin(email, password)

            localStorage.setItem(
                'arithmetic-user',
                JSON.stringify(response.user)
            )
            setUser(response.user)
            navigate('/Home')
        } catch (error) {
            setLoading('')
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
                    setError('Please input email and password.')
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

    return [loading, error, loginUser, errname]
}

export default useLoginUser
