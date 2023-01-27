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
import Logo from '../../Assets/img/paeon-vision-logo-transparent.png'

const IntroPage = () => {
    const [showNavSecond, setShowNavSecond] = useState(false)

    return (
        <MDBCol
            xl="8"
            className="title-component px-1 px-md-4 pt-3 bg-theme-color-1 py-auto"
        >
            <div style={{margin:"auto"}}>
                <MDBNavbar expand="lg" className="shadow-0">
                    <MDBContainer fluid className="mb-3 mb-lg-3 px-5">
                        <MDBNavbarBrand href="#" className="text-light">
                            <img src={Logo} alt="Logo" height="40" />
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
                            <MDBIcon className="text-light" icon="bars" fas />
                        </MDBNavbarToggler>
                        <MDBCollapse
                            navbar
                            show={showNavSecond}
                            className="z-index-1 text-center small text-light"
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
                                    <MDBNavbarLink
                                        href="#"
                                        className="text-reset"
                                    >
                                        Contact
                                    </MDBNavbarLink>
                                </MDBRipple>
                                <MDBRipple>
                                    <MDBNavbarLink
                                        href="#"
                                        className="text-reset"
                                    >
                                        About us
                                    </MDBNavbarLink>
                                </MDBRipple>
                                <MDBRipple>
                                    <MDBNavbarLink
                                        href="#"
                                        className="text-reset"
                                    >
                                        FAQ
                                    </MDBNavbarLink>
                                </MDBRipple>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                <div className="px-5">
                    <MDBTypography className="text-light text-center text-lg-start title-text my-5 pb-3">
                        PAEON
                        <br /> VISION
                    </MDBTypography>
                    <figure className="mt-3 mt-md-4">
                        <MDBTypography blockquote>
                            <p className="slide-in-left  text-color-1">
                                Paeon Vision is an image recognition application
                                that uses{' '}
                                <span className="text-light">
                                    machine learning model based on microsoft
                                    custom vision to detect monkeypox based on
                                    skin lesion.
                                </span>
                            </p>
                        </MDBTypography>
                        <figcaption className="blockquote-footer mt-3">
                            Created by Paeon Tech from AICS Commonwealth Branch
                        </figcaption>
                    </figure>
                    <div className="text-center mt-4 mb-5">
                        <MDBBtn
                            tag="a"
                            className="btn-get-started text-center"
                            color="success"
                            href="#login"
                        >
                            Get started
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </MDBCol>
    )
}

export default IntroPage
