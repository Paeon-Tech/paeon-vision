import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBIcon,
} from 'mdb-react-ui-kit'

const Modal = (props) => {
    const { centredModal, setCentredModal, toggleShow } = props.state
    return (
        <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>
                            <MDBIcon fas icon="info-circle me-2" />
                            Notice
                        </MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleShow}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <p>
                            Please make sure to upload a file with a supported
                            image format such as JPEG, PNG, GIF or File size less than 4 MB.
                        </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleShow}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default Modal
