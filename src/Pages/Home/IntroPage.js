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
    MDBRipple,
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
                    <MDBCollapse
                        navbar
                        show={showNavSecond}
                        className="z-index-1 text-center"
                    >
                        <MDBNavbarNav>
                            <MDBRipple>
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                    className="text-reset"
                                >
                                    Home
                                </MDBNavbarLink>
                            </MDBRipple>
                            <MDBRipple>
                                <MDBNavbarLink href="#" className="text-reset">
                                    Contact
                                </MDBNavbarLink>
                            </MDBRipple>
                            <MDBRipple>
                                <MDBNavbarLink href="#" className="text-reset">
                                    About us
                                </MDBNavbarLink>
                            </MDBRipple>
                            <MDBRipple>
                                <MDBNavbarLink href="#" className="text-reset">
                                    FAQ
                                </MDBNavbarLink>
                            </MDBRipple>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
            <div className="px-5">
                <img src={Logo} alt="" className="img-fluid" />
                <figure className="mt-3 mt-md-4 mt-lg-5">
                    <MDBTypography blockquote>
                        <p className='entrance-text'>
                            Paeon Vision is an image recognition application
                            that uses machine learning model based on microsoft
                            custom vision to detect monkeypox based on skin
                            lesion.
                        </p>
                    </MDBTypography>
                    <figcaption className="blockquote-footer mt-3 mt-md-4 mt-lg-5">
                        Created by Paeon Tech from AICS Commonwealth Branch
                    </figcaption>
                </figure>
                <div className="text-center mt-4 mb-3">
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
