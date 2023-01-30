import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUser } from '../../Hooks'
import {
    MDBCol,
    MDBTypography,
    MDBBtn,
    MDBIcon,
    MDBFooter,
    MDBCheckbox,
    MDBSpinner,
} from 'mdb-react-ui-kit'

const Signup = () => {
    const [success, loading, error, registerUser, errname] = useCreateUser()
    const [passwordShown, setPasswordShown] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

    const onChangeValue = (callback) => {
        return (event) => {
            callback(event.target.value)
        }
    }

    const onHandleSubmit = () => {
        return (event) => {
            event.preventDefault()
            registerUser({
                email,
                password,
                fullName,
            })
        }
    }

    const togglePassword = () => {
        setPasswordShown((isShown) => !isShown)
    }

    return (
        <>
            <MDBCol xl="4" className="px-md-5 pt-5 bg-theme-color-2">
                <form
                    method="POST"
                    className="form-width px-4 py-5 square border bg-theme-color-3 shadow-3"
                    id="login"
                    onSubmit={onHandleSubmit()}
                >
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4">
                            Create account
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
                                    <Link to="/" className="text-decoration-none">
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
                            label="Full Name"
                            id="Fullname"
                            className={`mb-3 shadow-3 square border border-1 border-squircle`}
                            onChange={onChangeValue(setFullName)}
                            autoComplete="off"
                            value={fullName}
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            label="Email"
                            id="Email"
                            className={`mb-3 shadow-3 square border border-1 border-squircle ${
                                errname === 'Email' ? 'border-danger' : ''
                            }`}
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            value={email}
                            type="email"
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
                                Sign up
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
                            href="https://learning-arithmetic.web.app"
                        >
                            paeonvision.web.app
                        </a>
                    </div>
                </MDBFooter>
            </MDBCol>
        </>
    )
}

export default Signup
