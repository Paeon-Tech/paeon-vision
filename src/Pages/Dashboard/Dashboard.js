import NavigationBar from './NavigationBar'
import { UserAuth } from '../../Context/AuthContext'
import { useEffect } from 'react'

const Dashboard = () => {
	const { setUser } = UserAuth()
	const user_data = JSON.parse(localStorage.getItem('paeon-user')) || null

	useEffect(() => {
		if(user_data){
		setUser(user_data)
	}
		//eslint-disable-next-line
	}, [])
	

    return (
        <main>
            <NavigationBar />
			{user_data.data.emailVerified ? "": <h1>Email not verified</h1>}
        </main>
    )
}

export default Dashboard
