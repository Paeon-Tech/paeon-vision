import { useState } from 'react'
import { UserAuth } from '../../Context'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUser } from '../../Hooks'
import { MDBCol, MDBTypography, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { DisplayLogo } from '../../Component'
import Footer from './Footer'

const LoginPage = () => {
    const navigate = useNavigate()
    const { signInWithGoogle, signInWithFacebook, signInWithMicrosoft } =
        UserAuth()
    const [error, loginUser, errname, setError, isLoading] = useLoginUser()
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

    return (
        <MDBCol
            xl="4"
            className="px-md-5 pt-5 bg-theme-color-3 col-height slide-in-transition"
        >
            <DisplayLogo text="Sign in to Paeon Vision" />

            {error && (
                <div
                    className="alert border form-width small alert-danger mb-3 alert-dismissible fade show"
                    role="alert"
                >
                    {error}
                    <button
                        type="button"
                        className="btn-close"
                        data-mdb-dismiss="alert"
                        aria-label="Close"
                        onClick={() => {
                            setError(null)
                        }}
                    ></button>
                </div>
            )}

            <div className="form-width px-4 py-4 square border bg-theme-color-2 shadow-3">
                <form method="POST" id="login" onSubmit={handleSubmit()}>
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4 login-text">
                            Sign in
                        </MDBTypography>
                        <label htmlFor="Email" className="pb-2">
                            Email
                        </label>
                        <input
                            label="Email"
                            id="Email"
                            type="text"
                            className={`mb-2 square border border-1 border-squircle ${
                                errname === 'Email' ||
                                errname === 'NoCredential'
                                    ? 'border-danger'
                                    : ''
                            }`}
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="Password" className="pb-2">
                            Password
                        </label>
                        <input
                            label="Password"
                            id="Password"
                            type="password"
                            className={`mb-3 square border border-1 border-squircle ${
                                errname === 'Password' ||
                                errname === 'NoCredential'
                                    ? 'border-danger'
                                    : ''
                            }`}
                            onChange={onChangeValue(setPassword)}
                            autoComplete="off"
                            required
                        />
                        <div className="mb-3 small">
                            <Link
                                to="/forgot-password"
                                className="text-decoration-none"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="text-center">
                            <MDBBtn
                                className={`mb-3 btn input-width shadow-0 ${
                                    isLoading ? 'disabled' : ''
                                }`}
                                color="success"
                            >
                                SIGN IN
                            </MDBBtn>
                        </div>
                        <hr />
                    </div>
                </form>
                <MDBTypography className="mb-3 text-center small">
                    Login using other option
                </MDBTypography>
                <div className="text-center mb-3 small">
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        onClick={() =>
                            signInWithGoogle().then(() => {
                                navigate('/home')
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
                                navigate('/home')
                            })
                        }
                    >
                        <MDBIcon fab icon="windows" />
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        className="m-1 border border-1 bg-theme-color-2 shadow-3"
                        onClick={() =>
                            signInWithFacebook().then(() => {
                                navigate('/home')
                            })
                        }
                    >
                        <MDBIcon fab icon="facebook-square" />
                    </MDBBtn>
                </div>
                <MDBTypography className="text-center small">
                    Not yet registered?{' '}
                    <Link to="/signup" className="text-decoration-none">
                        Sign&nbsp;up.
                    </Link>
                </MDBTypography>
            </div>
            <Footer />
        </MDBCol>
    )
}

export default LoginPage
