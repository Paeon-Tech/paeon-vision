import { MDBCol, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'

const Status = ({
    state: { BE, RI, FI, AC, BC, IC, TC, M1, M2, M3, processedImage },
}) => {
    return (
        <MDBCol lg="4" className="p-3 small">
            <div>
                <h3 className="mb-3 ">Status</h3>
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
                            Backend Processing to {BE}
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
                            Array Buffer Convertion
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
                            Blob Convertion
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
                            Image Bitmap Convertion
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
                </MDBTypography>
            </div>
        </MDBCol>
    )
}

export default Status
