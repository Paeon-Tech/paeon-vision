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

const IsOfflineModal = (props) => {
    const { IsOffline, setIsOffline, toggleIsOffline } = props.state
    return (
        <MDBModal tabIndex="-1" show={IsOffline} setShow={setIsOffline}>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>
                            <MDBIcon fas icon="info-circle me-2" />
                            Attention
                        </MDBModalTitle>
                        <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleIsOffline}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <p>
                            You don't have internet connection please uncheck the box and start predicition again.
                        </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={toggleIsOffline}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default IsOfflineModal
