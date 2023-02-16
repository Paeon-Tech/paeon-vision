import { MDBCol, MDBTypography } from 'mdb-react-ui-kit'

const Results = ({ state: { P1, P2, P3 } }) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Result</h3>
                {P1 &&
                    P1.result.map((data, index) => (
                        <p key={index}>{data.probability}</p>
                    ))}
                {P2 &&
                    P2.result.map((data, index) => (
                        <p key={index}>{data.probability}</p>
                    ))}
                {P3 &&
                    P3.result.map((data, index) => (
                        <p key={index}>{data.probability}</p>
                    ))}
            </div>
        </MDBCol>
    )
}

export default Results
