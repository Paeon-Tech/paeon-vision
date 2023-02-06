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
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const onChangeValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    const handleSubmit = () => {
        return (event) => {
            event.preventDefault()
            setLoading(true)
            setError(false)
            setSuccess(false)
            forgotPassword(email)
                .then((response) => {
                    setLoading(false)
                    setSuccess('Email Already Sent.')
                })
                .catch((error) => {
                    setLoading(false)
                    setError('Email not found')
                })
        }
    }

    return (
        <>
            <MDBCol xl="4" className="px-md-5 pt-5 bg-theme-color-2 col-height">
                <div className="text-center pb-3 pv-logo">
                    <img src={Logo} alt="Paeon Vision Logo" height="70px" />
                    <h5 className="pt-4 pb-2">Reset Password</h5>
                </div>
                <form
                    method="POST"
                    className="form-width px-4 py-5 square border bg-theme-color-3 shadow-3"
                    id="login"
                    onSubmit={handleSubmit()}
                >
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4 login-text">
                            Reset Password
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
                            {success && (
                                <p className="text-success">
                                    {success} <br /> Click here to{' '}
                                    <Link
                                        to="/"
                                        className="text-decoration-none"
                                    >
                                        Login.
                                    </Link>
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
                            className="mb-3 shadow-3 square border border-1 border-squircle"
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            value={email}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <div className="text-center">
                            <MDBBtn
                                className="mb-3 btn input-width"
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
                        <a
                            className="text-reset"
                            href="https://paeonvision.tech/"
                        >
                            paeonvision.tech
                        </a>
                    </div>
                </MDBFooter>
            </MDBCol>
        </>
    )
}

export default ForgotPassword
