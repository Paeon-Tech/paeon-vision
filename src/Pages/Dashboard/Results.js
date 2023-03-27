import { MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit'

const Results = ({ state: { P3 } }) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h5 className="mb-3 ">Result</h5>
                <MDBListGroup className="mb-3">
                    {P3 &&
                        P3.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <MDBListGroupItem tag='li' action noBorders color='success' className='px-3 rounded-3 mb-2' key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </MDBListGroupItem>
                            )
                        })}
                    {P3 && (
                        <MDBListGroupItem tag='li' action noBorders color='success' className='px-3 rounded-3 mb-2'>
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P3.time.toFixed(2)} ms
                            </strong>
                        </MDBListGroupItem>
                    )}
                </MDBListGroup>
            </div>
        </MDBCol>
    )
}

export default Results
