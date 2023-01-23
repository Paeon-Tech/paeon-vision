import IntroPage from './IntroPage'
import LoginPage from './LoginPage'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

const Homepage = () => {
    return (
        <MDBContainer fluid className="p-0">
            <MDBRow className="gx-0 row-height">
                <IntroPage />
                <LoginPage />
            </MDBRow>
        </MDBContainer>
    )
}

export default Homepage
