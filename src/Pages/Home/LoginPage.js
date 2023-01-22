import { Link } from 'react-router-dom'
import {
    MDBCol,
    MDBTypography,
    MDBInput,
    MDBBtn,
    MDBIcon,
	MDBFooter
} from 'mdb-react-ui-kit'

const LoginPage = () => {
    return (
        <MDBCol lg="4" className="p-5">
            <form action="" method="post" className="square border p-5 mt-4 mb-2 " id='login'>
                <MDBTypography tag="h3" className="mb-4">
                    Login
                </MDBTypography>
                <MDBInput
                    label="Email"
                    id="Email"
                    type="text"
                    className="mb-3"
                />
                <MDBInput
                    label="Password"
                    id="Password"
                    type="password"
                    className="mb-3"
                />
                <MDBBtn className="mb-3" color='dark' style={{ width: '100%' }}>
                    LOGIN
                </MDBBtn>
                <Link
                    to="/forgot-password"
                    className="text-decoration-none small mb-3"
                >
                    Forgot password?
                </Link>
                <p className="small">
                    Not yet registered?{' '}
                    <Link to="/signup" className="text-decoration-none">
                        Sign up.
                    </Link>
                </p>
                <hr />
                <p className="small mb-3 text-center">
                    Alternative sign in option
                </p>
                <div className="text-center mb-3">
                    <MDBBtn
                        className="m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        href="#"
                    >
                        <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn
                        className="m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="#"
                    >
                        <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                    <MDBBtn
                        className="m-1"
                        style={{ backgroundColor: '#333333' }}
                        href="#"
                    >
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </div>
            </form>
            <MDBFooter>
                <div className="text-center p-3 small">
					&copy; {new Date().getFullYear()} Copyright:{' '}
                    <a
                        className="text-dark"
                        href="https://learning-arithmetic.web.app"
                    >
                        paeonvision.web.app
                    </a>
                </div>
            </MDBFooter>
        </MDBCol>
    )
}

export default LoginPage
