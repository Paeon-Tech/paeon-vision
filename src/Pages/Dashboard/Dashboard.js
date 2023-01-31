import NavigationBar from './NavigationBar'

const Dashboard = () => {
	const user_data = JSON.parse(localStorage.getItem('paeon-user'))
	console.log(user_data.isAuthenticated)
    return (
        <main>
            <NavigationBar />
        </main>
    )
}

export default Dashboard
