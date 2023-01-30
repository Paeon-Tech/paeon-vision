import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarLink,
    MDBNavbarItem,
} from 'mdb-react-ui-kit'
import Logo from '../../Assets/img/paeon-vision-logo-transparent.png'
import { API } from '../../Api'

const NavigationBar = () => {
    const { nav_menu } = API
    const [showNavSecond, setShowNavSecond] = useState(false)

    return (
        <MDBNavbar tag="nav" expand="lg" className="shadow-0">
            <MDBContainer fluid className="mb-3 mb-lg-3 px-3 px-md-5">
                <MDBNavbarBrand tag={Link} to="/" className="text-light">
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
                    }}
                >
                    <MDBIcon className="text-light" icon="bars" fas />
                </MDBNavbarToggler>
                <MDBCollapse
                    navbar
                    show={showNavSecond}
                    className="z-index-1 text-start text-light small"
                >
                    <MDBNavbarNav>
                        {nav_menu.map((data, index) => {
                            return (
                                <MDBNavbarItem key={index}>
                                    <MDBNavbarLink
                                        active={false}
                                        tag={NavLink}
                                        to={data.path}
                                        className="text-reset"
                                    >
                                        {data.menu}
                                    </MDBNavbarLink>
                                    <hr className="d-block d-md-none m-0 p-0" />
                                </MDBNavbarItem>
                            )
                        })}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default NavigationBar
