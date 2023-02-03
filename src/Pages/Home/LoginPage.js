import { useState } from 'react'
import { UserAuth } from '../../Context'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUser } from '../../Hooks'
import {
    MDBCol,
    MDBTypography,
    MDBBtn,
    MDBIcon,
    MDBFooter,
    MDBCheckbox,
    MDBSpinner,
} from 'mdb-react-ui-kit'

const LoginPage = () => {
    const navigate = useNavigate()
    const { signInWithGoogle, signInWithGithub, signInWithMicrosoft } =
        UserAuth()
    const [loading, error, loginUser, errname] = useLoginUser()
    const [passwordShown, setPasswordShown] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    const handleSubmit = () => {
        return (event) => {
            event.preventDefault()
            loginUser(email, password)
        }
    }

    const togglePassword = () => {
        setPasswordShown((isShown) => !isShown)
    }

    return (
        <MDBCol xl="4" className="px-md-5 pt-5 bg-theme-color-2">
            <div className="form-width px-4 py-5 square border bg-theme-color-3 shadow-3">
                <form method="POST" id="login" onSubmit={handleSubmit()}>
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4">
                            Login
                        </MDBTypography>
                        <div className="text-center my-2">
                            {error && (
                                <p className="text-danger small">
                                    <MDBIcon
                                        fas
                                        icon="exclamation-circle"
                                        fixed
                                    />{' '}
                                    {error}
                                </p>
                            )}
                            {loading && (
                                <MDBSpinner
                                    className="ms-2 text=center"
                                    color="dark"
                                >
                                    <span className="visually-hidden text-center">
                                        Loading...
                                    </span>
                                </MDBSpinner>
                            )}
                        </div>
                        <input
                            label="Email"
                            id="Email"
                            type="text"
                            className={`mb-3 shadow-3 square border border-1 border-squircle ${
                                errname === 'Email' ||
                                errname === 'NoCredential'
                                    ? 'border-danger'
                                    : ''
                            }`}
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            placeholder="Email"
                            required
                        />
                        <input
                            label="Password"
                            id="Password"
                            type={passwordShown ? 'text' : 'password'}
                            className={`mb-3 shadow-3 square border border-1 border-squircle ${
                                errname === 'Password' ||
                                errname === 'NoCredential'
                                    ? 'border-danger'
                                    : ''
                            }`}
                            onChange={onChangeValue(setPassword)}
                            autoComplete="off"
                            placeholder="Password"
                            required
                        />
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="flexCheckDefault"
                            label="Show Password"
                            className="mb-3"
                            onChange={togglePassword}
                        />
                        <div className="text-center">
                            <MDBBtn
                                className="mb-3 btn input-width"
                                color="dark"
                            >
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
                    </div>
                </form>
                <MDBTypography className="mb-3 text-center">
                    Login using other option
                </MDBTypography>
                <div className="text-center mb-3">
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        onClick={() =>
                            signInWithGoogle().then(() => {
                                navigate('/Home')
                            })
                        }
                    >
                        <MDBIcon fab icon="google" />
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        onClick={() =>
                            signInWithMicrosoft().then(() => {
                                navigate('/Home')
                            })
                        }
                    >
                        <MDBIcon fab icon="windows" />
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        onClick={() =>
                            signInWithGithub().then(() => {
                                navigate('/Home')
                            })
                        }
                    >
                        <MDBIcon fab icon="github" />
                    </MDBBtn>
                </div>
                <MDBTypography className="text-center">
                    Not yet registered?{' '}
                    <Link to="/Signup" className="text-decoration-none">
                        Sign&nbsp;up.
                    </Link>
                </MDBTypography>
            </div>
            <MDBFooter>
                <div className="text-center mt-4 pb-4 small text-dark">
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
