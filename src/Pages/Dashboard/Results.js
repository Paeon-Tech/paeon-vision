import { MDBCol, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'

const Results = ({ state: { P1, P2, P3, P4, P5, I1, I2, I3, I4, I5 } }) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h5 className="mb-3 ">Result</h5>
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
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
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
                                className="me-2 text-dark"
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
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
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
                                className="me-2 text-dark"
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
                <MDBTypography listUnStyled className="mb-3">
                    {P3 &&
                        P3.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
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
                                className="me-2 text-dark"
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
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
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
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P4.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
                {P5 && (
                    <MDBTypography>
                        <strong>Model 5 - Iteration 5</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-0">
                    {P5 &&
                        P5.result.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.className}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {P5 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {P5.time.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
                {I1 && (
                    <MDBTypography>
                        <strong>Azure Custom Vision Iteration 1</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {I1 &&
                        I1.response.predictions.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.tagName}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {I1 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {I1.taskTime.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
                {I2 && (
                    <MDBTypography>
                        <strong>Azure Custom Vision Iteration 2</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {I2 &&
                        I2.response.predictions.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.tagName}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {I2 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {I2.taskTime.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
                {I3 && (
                    <MDBTypography>
                        <strong>Azure Custom Vision Iteration 3</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {I3 &&
                        I3.response.predictions.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.tagName}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {I3 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {I3.taskTime.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
				{I4 && (
                    <MDBTypography>
                        <strong>Azure Custom Vision Iteration 4</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {I4 &&
                        I4.response.predictions.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.tagName}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {I4 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {I4.taskTime.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
				{I5 && (
                    <MDBTypography>
                        <strong>Azure Custom Vision Iteration 5</strong>
                    </MDBTypography>
                )}
                <MDBTypography listUnStyled className="mb-3">
                    {I5 &&
                        I5.response.predictions.map((data, index) => {
                            const probability = data.probability
                            const percentage = (probability * 100).toFixed(2)
                            return (
                                <li className="mb-1" key={index}>
                                    <MDBIcon
                                        fas
                                        icon="poll"
                                        className="me-2 text-dark"
                                    />
                                    {data.tagName}:{' '}
                                    <strong className="text-success">
                                        {percentage}%
                                    </strong>
                                </li>
                            )
                        })}
                    {I5 && (
                        <li className="mb-1">
                            <MDBIcon
                                fas
                                icon="clock"
                                className="me-2 text-dark"
                            />
                            Total time taken:{' '}
                            <strong className="text-success">
                                {I5.taskTime.toFixed(2)} ms
                            </strong>
                        </li>
                    )}
                </MDBTypography>
            </div>
        </MDBCol>
    )
}

export default Results
