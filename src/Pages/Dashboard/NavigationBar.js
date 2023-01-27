import React, { useState } from 'react'
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

const NavigationBar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <MDBNavbar expand="lg" dark className="bg-theme-color-1">
                <MDBContainer fluid className="mx-md-5">
                    <MDBNavbarBrand href="#">
                        <img src={Logo} alt="Logo" height="25" />
                        <span className='small'>Paeon Vision</span>
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
                        <MDBNavbarNav right fullWidth={false} className="small text-start">
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <MDBIcon fas icon="home" /> Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon far icon="question-circle"  /> Help
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon fas icon="user-circle" /> Account
                                    Settings
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon fas icon="sign-out-alt" /> Logout
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}

export default NavigationBar
