import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
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
    const { userLogout } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await userLogout()
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <MDBNavbar expand="lg" dark className="bg-theme-color-1">
                <MDBContainer fluid className="mx-md-5">
                    <MDBNavbarBrand href="#">
                        <img src={Logo} alt="Logo" height="25" className='me-2'/>
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
                            className="small text-start"
                        >
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    active
                                    aria-current="page"
                                    href="#"
                                >
                                    <MDBIcon fas icon="home" className="me-2"
                                            /> Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon far icon="question-circle" className="me-2" /> Help
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href="#">
                                    <MDBIcon fas icon="user-circle" className="me-2" /> Account
                                    Settings
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink
                                    tag={Link}
                                    onClick={handleLogout}
                                >
                                    <MDBIcon fas icon="sign-out-alt" className="me-2" /> Logout
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
