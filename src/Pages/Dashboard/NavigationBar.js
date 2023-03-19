import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
} from 'mdb-react-ui-kit'
import Logo from '../../Assets/img/paeon-vision-logo-transparent.png'
import LogoutModal from './LogoutModal'
import { ModalState } from '../../Context'

const NavigationBar = () => {
    const [showNav, setShowNav] = useState(false)
    const { toggleShow1 } = ModalState()

    const handleLogout = async () => {
        toggleShow1()
    }

    return (
        <>
            <MDBNavbar expand="lg" dark className="bg-theme-color-1">
                <MDBContainer fluid className="mx-md-5 small">
                    <MDBNavbarBrand href="/home">
                        <img
                            src={Logo}
                            alt="Logo"
                            height="25"
                            className="me-2"
                        />
                        <span className="small">Paeon Vision</span>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav
                            right
                            fullWidth={false}
                            className="text-start"
                        >
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon
                                        far
                                        icon="question-circle"
                                        className="me-2"
                                    />{' '}
                                    Help
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon
                                        fas
                                        icon="user-circle"
                                        className="me-2"
                                    />{' '}
                                    Account Settings
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    tag={Link}
                                    onClick={handleLogout}
                                >
                                    <MDBIcon
                                        fas
                                        icon="sign-out-alt"
                                        className="me-2"
                                    />{' '}
                                    Logout
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <LogoutModal />
        </>
    )
}

export default NavigationBar
