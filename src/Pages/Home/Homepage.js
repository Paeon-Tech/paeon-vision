import IntroPage from './IntroPage'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
    return (
        <MDBContainer breakpoint="xxl" className="p-0" tag="main">
            <MDBRow className="gx-0 row-height">
				<IntroPage/>
                <Outlet/>
            </MDBRow>
        </MDBContainer>
    )
}

export default Homepage
