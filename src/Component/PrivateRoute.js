import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const PrivateRoute = ({ children }) => {
	const { user } = UserAuth()
    const user_data = JSON.parse(localStorage.getItem('paeon-user')) || false

    if (user_data.isAuthenticated || user.isAuthenticated === true) {
        return children
    } 

    return <Navigate to="/" />
}

export default PrivateRoute
