import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'

const Homepage = () => {
    return (
        <MDBContainer fluid className="p-0">
            <MDBRow className='gx-0'>
                <MDBCol lg="8" className="bg-theme-color-1 title-component">
					testing
                </MDBCol>
                <MDBCol lg="4">Login</MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Homepage
