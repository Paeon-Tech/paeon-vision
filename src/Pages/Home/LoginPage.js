import { Link } from 'react-router-dom'
import {
    MDBCol,
    MDBTypography,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBFooter,
    MDBCheckbox,
} from 'mdb-react-ui-kit'

const LoginPage = () => {
    return (
        <MDBCol lg="4" className="px-5 pt-5 bg-theme-color-2">
            <form
                action=""
                method="post"
                className="square border px-5 pt-5 mx-4 pb-4 mb-3 mt-4 bg-theme-color-3 shadow-3"
                id="login"
            >
                <MDBTypography tag="h5" className="mb-4">
                    Login
                </MDBTypography>
                <MDBInput
                    label="Email"
                    id="Email"
                    type="text"
                    className="mb-3 shadow-3"
                    wrapperClass="small"
                />
                <MDBInput
                    label="Password"
                    id="Password"
                    type="password"
                    className="mb-3 shadow-3"
                    wrapperClass="small"
                />
                <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Show Password"
                    className="mb-3 small"
                    wrapperClass="small"
                />
                <MDBBtn className="mb-3" color="dark" style={{ width: '100%' }}>
                    LOGIN
                </MDBBtn>
                <Link
                    to="/forgot-password"
                    className="text-decoration-none small mb-3"
                >
                    Forgot password?
                </Link>

                <hr />
                <p className="small mb-3 text-center">
                    Login using other option
                </p>
                <div className="text-center mb-3">
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        href="#"
                    >
                        <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        href="#"
                    >
                        <MDBIcon fab icon="windows" />
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        href="#"
                    >
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </div>
                <p className="small text-center">
                    Not yet registered?{' '}
                    <Link to="/signup" className="text-decoration-none">
                        Sign&nbsp;up.
                    </Link>
                </p>
            </form>
            <MDBFooter>
                <div className="text-center mt-4 pb-3 small text-dark">
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a
                        className="text-reset"
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
