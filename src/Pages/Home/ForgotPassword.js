import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../Context/'
import Logo from '../../Assets/img/pv-logo.png'
import {
    MDBCol,
    MDBTypography,
    MDBBtn,
    MDBIcon,
    MDBFooter,
    MDBSpinner,
} from 'mdb-react-ui-kit'

const ForgotPassword = () => {
    const { forgotPassword } = UserAuth()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')

    const onChangeValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    const handleSubmit = () => {
        return (event) => {
            event.preventDefault()
            setError(false)
            setSuccess(false)
            forgotPassword(email)
                .then((response) => {
                    setSuccess('Email Already Sent.')
                })
                .catch((error) => {
                    setError('Email not found')
                })
        }
    }

    return (
        <>
            <MDBCol
                xl="4"
                className="px-md-5 pt-5 bg-theme-color-3 col-height slide-in-transition"
            >
                <div className="text-center pb-3 pv-logo">
                    <img src={Logo} alt="Paeon Vision Logo" height="70px" />
                    <h5 className="pt-4 pb-2">Reset Password</h5>
                </div>
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
                            onClick={() => setError(null)}
                        ></button>
                    </div>
                )}
                {success && (
                    <div
                        className="alert border form-width small alert-success mb-3 alert-dismissible fade show"
                        role="alert"
                    >
                        {success}
                        <button
                            type="button"
                            className="btn-close"
                            data-mdb-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setSuccess(null)}
                        ></button>
                    </div>
                )}
                <form
                    method="POST"
                    className="form-width px-4 py-4 square border bg-theme-color-2 shadow-3"
                    id="login"
                    onSubmit={handleSubmit()}
                >
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4 login-text">
                            Reset Password
                        </MDBTypography>
                        <label htmlFor="Email" className="mb-2">
                            Email
                        </label>
                        <input
                            label="Email"
                            id="Email"
                            className="mb-4 square border border-1 border-squircle"
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            value={email}
                            type="email"
                            required
                        />
                        <div className="text-center">
                            <MDBBtn
                                className="mb-3 btn input-width shadow-0"
                                color="success"
                            >
                                Reset
                            </MDBBtn>
                        </div>
                        <hr />
                        <MDBTypography className="text-center">
                            Already have an account?{' '}
                            <Link to="/" className="text-decoration-none">
                                Login.
                            </Link>
                        </MDBTypography>
                    </div>
                </form>
                <MDBFooter>
                    <div className="text-center mt-4 pb-4 small text-dark">
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a href="https://paeonvision.tech/">paeonvision.tech</a>
                    </div>
                </MDBFooter>
            </MDBCol>
        </>
    )
}

export default ForgotPassword
