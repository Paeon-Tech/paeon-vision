import { MDBCol, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'

const Status = ({
    state: {
        BE,
        RI,
        FI,
        AC,
        BC,
        IC,
        TC,
        M1,
        M2,
        M3,
        M4,
        M5,
        processedImage,
        I1,
        I2,
        I3,
        I4,
        I5,
    },
}) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h5 className="mb-3 ">Status</h5>
                <MDBTypography>
                    {processedImage
                        ? 'Image uploaded and ready for prediction.'
                        : 'Upload image to get started'}
                </MDBTypography>
                <MDBTypography listUnStyled className="mb-0">
                    {BE ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Backend Processing set to {BE}
                        </li>
                    ) : (
                        ''
                    )}
                    {RI ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image Data Received
                        </li>
                    ) : (
                        ''
                    )}
                    {FI ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Fetched Image
                        </li>
                    ) : (
                        ''
                    )}
                    {AC ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Array Buffer Conversion
                        </li>
                    ) : (
                        ''
                    )}
                    {BC ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Blob Conversion
                        </li>
                    ) : (
                        ''
                    )}
                    {IC ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image Bitmap Conversion
                        </li>
                    ) : (
                        ''
                    )}
                    {TC ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Tensor Conversion
                        </li>
                    ) : (
                        ''
                    )}
                    {M1 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Model 1 Loaded
                        </li>
                    ) : (
                        ''
                    )}
                    {M2 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Model 2 Loaded
                        </li>
                    ) : (
                        ''
                    )}
                    {M3 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Model 3 Loaded
                        </li>
                    ) : (
                        ''
                    )}
                    {M4 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Model 4 Loaded
                        </li>
                    ) : (
                        ''
                    )}
                    {M5 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Model 5 Loaded
                        </li>
                    ) : (
                        ''
                    )}
                    {I1 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image send to Iteration 1 endpoint
                        </li>
                    ) : (
                        ''
                    )}
                    {I2 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image send to Iteration 2 endpoint
                        </li>
                    ) : (
                        ''
                    )}
                    {I3 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image send to Iteration 3 endpoint
                        </li>
                    ) : (
                        ''
                    )}
                    {I4 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image send to Iteration 4 endpoint
                        </li>
                    ) : (
                        ''
                    )}
                    {I5 ? (
                        <li className="mb-1">
                            <MDBIcon
                                icon="check-circle"
                                className="me-2 text-success"
                            />
                            Image send to Iteration 5 endpoint
                        </li>
                    ) : (
                        ''
                    )}
                </MDBTypography>
            </div>
        </MDBCol>
    )
}

export default Status
