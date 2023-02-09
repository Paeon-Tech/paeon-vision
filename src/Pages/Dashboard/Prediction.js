import { useState } from 'react'
import { MDBCol, MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit'

const Prediction = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileName, setFileName] = useState('')

    const handleFileInput = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()

		if (!file || file.type.split("/")[0] !== "image") {
			alert("Please select a valid image file (JPEG or PNG)");
			return;
		}

        reader.addEventListener('load', () => {
            setSelectedFile(reader.result)
        })

        setFileName(file.name)
        reader.readAsDataURL(file)
    }

    return (
        <>
            <div className="pt-3 pb-3 px-3 px-md-0 small">
                <h3 className="mb-4">Select an image</h3>
                <MDBInputGroup className="mb-3">
                    <input
                        className="form-control me-2 me-md-5"
                        type="file"
                        onChange={handleFileInput}
                    />
                </MDBInputGroup>
                    <MDBBtn color="dark" className="shadow-0">
                        PREDICT
                    </MDBBtn>
            </div>
            <MDBCol lg="6" className="mb-4 mb-md-0 px-3 px-md-0 small">
                <div>
                    <h3 className="mb-3">Image</h3>
                    <div className="">
                        {selectedFile ? (
                            <img
                                src={selectedFile}
                                className="img-fluid"
                                alt="Uploaded file"
                            />
                        ) : (
                            <p>No image selected</p>
                        )}
                    </div>
                </div>
            </MDBCol>
            <MDBCol lg="6" className="px-3 px-md-0 small">
                <div>
                    <h3 className="mb-3 ">Prediction Result</h3>
                    <p>
                        Selected file:{' '}
                        {selectedFile ? fileName : 'No selected file'}
                    </p>
                </div>
            </MDBCol>
        </>
    )
}

export default Prediction
