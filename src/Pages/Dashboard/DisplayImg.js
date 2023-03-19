import { MDBCol } from 'mdb-react-ui-kit'

const DisplayImg = (props) => {
    const { selectedFile, fileName } = props.state

    return (
        <MDBCol lg="4" className="mb-3 mb-lg-0 p-3 small overflow-hidden">
            <div>
                <h5 className="mb-3">Image</h5>
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
                </div>
            </div>
        </MDBCol>
    )
}

export default DisplayImg
