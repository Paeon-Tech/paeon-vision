import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
	MDBIcon
} from 'mdb-react-ui-kit'
import { ModalState } from '../../Context'

const LogoutModal = () => {
	const {centredModal1, toggleShow1, setCentredModal1, logout} = ModalState()

    return (
        <MDBModal tabIndex="-1" show={centredModal1} setShow={setCentredModal1}>
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
                            onClick={toggleShow1}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <p>
                            Are you sure you want to logout?
                        </p>
                    </MDBModalBody>
                    <MDBModalFooter>
						<MDBBtn color="danger" onClick={logout} className="shadow-0">
                            Logout
                        </MDBBtn>
                        <MDBBtn color="secondary" onClick={toggleShow1}>
                            Close
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}

export default LogoutModal
