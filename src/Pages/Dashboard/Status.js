import { MDBCol, MDBTypography } from 'mdb-react-ui-kit'

const Status = () => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Status</h3>
                <MDBTypography>Prediction not started.</MDBTypography>
            </div>
        </MDBCol>
    )
}

export default Status
