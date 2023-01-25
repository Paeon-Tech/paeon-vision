import IntroPage from './IntroPage'
import LoginPage from './LoginPage'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

const Homepage = () => {
    return (
        <main>
            <MDBContainer fluid className="p-0">
                <MDBRow className="gx-0 row-height">
                    <IntroPage />
                    <LoginPage />
                </MDBRow>
            </MDBContainer>
        </main>
    )
}

export default Homepage
