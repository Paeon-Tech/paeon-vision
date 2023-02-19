import IntroPage from './IntroPage'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../Context'

const Homepage = () => {
    const { user } = UserAuth()
    const user_data = JSON.parse(localStorage.getItem('paeon-user')) || null

    if (user_data || user) {
        return <Navigate to="/home" />
    }

    return (
        <MDBContainer breakpoint="xxl" className="p-0 bg-theme-color-2" tag="main">
            <MDBRow className="gx-0 row-height  bg-theme-color-2">
                <IntroPage />
                <Outlet />
            </MDBRow>
        </MDBContainer>
    )
}

export default Homepage
