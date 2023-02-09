import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context'

const PrivateRoute = ({ children }) => {
    const { user } = UserAuth()
    const user_data = JSON.parse(localStorage.getItem('paeon-user')) || null

    if (user_data || user) {
        console.log('The user is authenticated')
        return children
    }
    console.log('The user is not authenticated')
    return <Navigate to="/" />
}

export default PrivateRoute
