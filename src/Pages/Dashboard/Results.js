import { MDBCol, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'

const Results = ({ state: { P1, P2, P3, P4 } }) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Result</h3>
                {P1 && (
                    <MDBTypography>
                        <strong>Model 1 - Iteration 1</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {P1 &&
                        P1.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas icon="poll"
                                        className="me-2 text-success"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {P1 && (
                        <li className="mb-1">
                            <MDBIcon
								fas
                                icon="clock"
                                className="me-2 text-success"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P1.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
				{P2 && (
                    <MDBTypography>
                        <strong>Model 2 - Iteration 2</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {P2 &&
                        P2.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas icon="poll"
                                        className="me-2 text-success"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {P2 && (
                        <li className="mb-1">
                            <MDBIcon
								fas
                                icon="clock"
                                className="me-2 text-success"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P2.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
				{P3 && (
                    <MDBTypography>
                        <strong>Model 3 - Iteration 3</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-0">
                    {P3 &&
                        P3.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas icon="poll"
                                        className="me-2 text-success"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {P3 && (
                        <li className="mb-1">
                            <MDBIcon
								fas
                                icon="clock"
                                className="me-2 text-success"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P3.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
				{P4 && (
                    <MDBTypography>
                        <strong>Model 4 - Iteration 4</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-0">
                    {P4 &&
                        P4.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas icon="poll"
                                        className="me-2 text-success"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {P4 && (
                        <li className="mb-1">
                            <MDBIcon
								fas
                                icon="clock"
                                className="me-2 text-success"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P4.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
            </div>
        </MDBCol>
    )
}

export default Results
