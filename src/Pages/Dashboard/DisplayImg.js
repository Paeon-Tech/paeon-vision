import { MDBCol, MDBBtn } from "mdb-react-ui-kit";

const DisplayImg = (props) => {
	const { selectedFile, fileName, handleRemove } = props.state

	return (
		<MDBCol
                lg="6"
                className="mb-3 mb-lg-0 p-3 small"
            >
                <div>
                    <h3 className="mb-3">Image</h3>
                    <div>
                        {selectedFile ? (
                            <div>
                                <p className="mb-2">
                                    File name: {<strong>{fileName}</strong>}
                                </p>
                                <img
                                    src={selectedFile}
                                    className="img-fluid mb-3"
                                    alt="Uploaded file"
                                />
                            </div>
                        ) : (
                            <p>No image selected</p>
                        )}
                        {selectedFile && (
                            <div>
                                <MDBBtn
                                    color="danger"
                                    className="shadow-0"
									size="sm"
                                    onClick={handleRemove}
                                >
                                    REMOVE
                                </MDBBtn>
                            </div>
                        )}
                    </div>
                </div>
            </MDBCol>
	);
};

export default DisplayImg;