import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'

const Error = () => {
    return (
        <MDBContainer>
            <MDBRow className="p-5 m-5">
                <MDBTypography tag="h1">
                    <MDBIcon fas icon="exclamation-circle" /> Page not found
                </MDBTypography>
                <MDBTypography>
                    The page your are trying to access are not found
                </MDBTypography>
                <Link to="/Home">
                    <MDBTypography>
                        <MDBIcon fas icon="arrow-circle-left" /> Back to
                        homepage
                    </MDBTypography>
                </Link>
            </MDBRow>
        </MDBContainer>
    )
}

export default Error
