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
        <MDBCol xl="4" className="px-md-5 pt-5 bg-theme-color-2">
            <form
                action=""
                method="post"
                className="form-width px-4 py-5 square border bg-theme-color-3 shadow-3"
                id="login"
            >
                <div className="small input-width">
                    <MDBTypography tag="h5" className="mb-4">
                        Login
                    </MDBTypography>
                    <MDBInput
                        label="Email"
                        id="Email"
                        type="text"
                        className="mb-3 shadow-3"
                    />
                    <MDBInput
                        label="Password"
                        id="Password"
                        type="password"
                        className="mb-3 shadow-3"
                    />
                    <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Show Password"
                        className="mb-3"
                    />
                    <div className="text-center">
                        <MDBBtn className="mb-3 btn input-width" color="dark">
                            LOGIN
                        </MDBBtn>
                    </div>
                    <Link
                        to="dashboard"
                        className="text-decoration-none mb-3"
                    >
                        Forgot password?
                    </Link>
                    <hr />
                    <MDBTypography className="mb-3 text-center">
                        Login using other option
                    </MDBTypography>
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
                    <MDBTypography className="text-center">
                        Not yet registered?{' '}
                        <Link to="/signup" className="text-decoration-none">
                            Sign&nbsp;up.
                        </Link>
                    </MDBTypography>
                </div>
            </form>
            <MDBFooter>
                <div className="text-center mt-4 pb-5 small text-dark">
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
