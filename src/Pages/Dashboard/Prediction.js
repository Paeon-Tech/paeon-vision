import { useState, useRef } from 'react'
import {
    MDBCol,
    MDBInputGroup,
    MDBBtn,
    MDBTypography,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
	MDBSpinner
} from 'mdb-react-ui-kit'

const Prediction = () => {
    const [selectedFile, setSelectedFile] = useState('')
    const [fileName, setFileName] = useState('')
	const [loading, setLoading] = useState(false);
    const fileInput = useRef(null)
	const [centredModal, setCentredModal] = useState(false);
	const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

	const toggleShow = () => setCentredModal(!centredModal);

    const handleFileInput = () => {
		const file = fileInput.current.files[0]

		if (!acceptedImageTypes.includes(file.type)) {
			toggleShow()
			setSelectedFile('')
			setFileName('')
			fileInput.current.value = ''
            return
        }

        setFileName(fileInput.current.files[0].name)
    }

    const handleUpload = () => {
        if (!fileInput.current.files[0]) {
            toggleShow()
            return
        }

        const file = fileInput.current.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setSelectedFile(reader.result)
        })

        setLoading(true);
        reader.readAsDataURL(file)
		reader.onloadend = () => {
			setSelectedFile(reader.result)
			setLoading(false)
		}
    }


    const handleRemove = () => {
        setSelectedFile('')
        setFileName('')
        fileInput.current.value = ''
    }

    return (
        <>
            <div className="p-3 mb-3 small border bg-theme-color-2">
                <h3>Select an image</h3>
                <MDBTypography tag="small">
                    Please make sure to upload a file with a supported image
                    format such as <span className="fst-italic">JPEG, PNG, or GIF.</span>
                </MDBTypography>
                <div className="mt-4">
                    <MDBInputGroup className="mb-3">
                        <input
                            ref={fileInput}
                            className="form-control me-2 me-md-5"
                            type="file"
                            onChange={handleFileInput}
                        />
                        <MDBBtn
							color="dark"
							className={`shadow-0 ${ loading ? 'disabled' : ''}`}
							onClick={handleUpload}
						>
							{loading ? (
								<MDBSpinner size="sm" color='light'>
									<span className='visually-hidden'>Loading...</span>
								</MDBSpinner>
							) : (
								'UPLOAD'
							)}
						</MDBBtn>
                    </MDBInputGroup>
                </div>
            </div>
            <MDBCol
                lg="6"
                className="mb-3 mb-md-0 p-3 small border bg-theme-color-2"
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
                                    onClick={handleRemove}
                                >
                                    REMOVE
                                </MDBBtn>
                            </div>
                        )}
                    </div>
                </div>
            </MDBCol>
            <MDBCol lg="6" className="p-3 small border bg-theme-color-2">
                <div>
                    <h3 className="mb-3 ">Prediction Result</h3>
                </div>
            </MDBCol>
			<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
				<MDBModalDialog centered>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Notice</MDBModalTitle>
							<MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<p>
								Please make sure to upload a file with a supported image format such as JPEG, PNG, or GIF.
							</p>
						</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn color='secondary' onClick={toggleShow}>
								Close
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
        </>
    )
}

export default Prediction
