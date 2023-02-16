import { MDBCol, MDBTypography } from 'mdb-react-ui-kit'

const Results = ({ state: { prediction } }) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Result</h3>
                <MDBTypography>Prediction Not started</MDBTypography>
                {prediction &&
                    prediction.map((data, index) => (
                        <p key={index}>{data.probability}</p>
                    ))}
            </div>
        </MDBCol>
    )
}

export default Results
