import { useState } from 'react'
import {
    MDBContainer,
    MDBCol,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBTypography,
    MDBBtn,
} from 'mdb-react-ui-kit'
import Logo from '../../Assets/img/brand-name.png'

const IntroPage = () => {
    const [showNavSecond, setShowNavSecond] = useState(false)

    return (
        <MDBCol
            lg="8"
            className="title-component bg-theme-color-1 px-1 px-md-4 pt-3"
        >
            <MDBNavbar expand="lg" className="shadow-0">
                <MDBContainer fluid className="mb-3 mb-lg-3 px-2 px-md-3">
                    <MDBNavbarBrand href="#" className="text-reset">
                        Paeon Vision
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            setShowNavSecond(!showNavSecond)

                            console.log(showNavSecond)
                        }}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav>
                            <MDBNavbarLink
                                active
                                aria-current="page"
                                href="#"
                                className="text-reset"
                            >
                                Home
                            </MDBNavbarLink>
                            <MDBNavbarLink href="#" className="text-reset">
                                Contact
                            </MDBNavbarLink>
                            <MDBNavbarLink href="#" className="text-reset">
                                About us
                            </MDBNavbarLink>
                            <MDBNavbarLink href="#" className="text-reset">
                                FAQ
                            </MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <div className="px-5">
                <img src={Logo} alt="" className="img-fluid" />
                <figure className="mt-3">
                    <MDBTypography blockquote>
                        <p>
                            Paeon Vision is an image recognition application
                            that uses machine learning model based on microsoft
                            custom vision to detect monkeypox based on skin
                            lesion.
                        </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mt-3">
                        Created by Paeon Tech from AICS Commonwealth Branch
                    </figcaption>
                </figure>
                <div className="text-center mt-4 mb-5">
                    <MDBBtn
                        className="btn-get-started text-center"
                        color="dark"
                    >
                        Get started
                    </MDBBtn>
                </div>
            </div>
        </MDBCol>
    )
}

export default IntroPage
