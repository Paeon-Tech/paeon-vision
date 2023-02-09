import NavigationBar from './NavigationBar'

const Dashboard = () => {
    const user_data = JSON.parse(localStorage.getItem('paeon-user')) || null

    return (
        <main>
            <NavigationBar />
            {user_data.data.emailVerified ? '' : <h1>Email not verified</h1>}
        </main>
    )
}

export default Dashboard
