import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUser } from '../../Hooks'
import { MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit'
import { DisplayLogo } from '../../Component'
import Footer from './Footer'

const Signup = () => {
    const [setError, error, registerUser, errname, isLoading] = useCreateUser()
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

    return (
        <>
            <MDBCol
                xl="4"
                className="px-md-5 pt-5 bg-theme-color-3 col-height slide-in-bck-center"
            >
                <DisplayLogo text="Signup to Paeon Vision" />
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
                <form
                    method="POST"
                    className="form-width px-4 py-4 square border bg-theme-color-2"
                    id="login"
                    onSubmit={onHandleSubmit()}
                >
                    <div className="small input-width">
                        <MDBTypography tag="h5" className="mb-4 login-text">
                            Create account
                        </MDBTypography>
                        <label htmlFor="Full Name" className="pb-2">
                            Display Name
                        </label>
                        <input
                            label="Full Name"
                            id="Fullname"
                            className={`mb-2 square border border-1 border-squircle`}
                            onChange={onChangeValue(setFullName)}
                            autoComplete="off"
                            value={fullName}
                            type="text"
                            required
                        />
                        <label htmlFor="Email" className="pb-2">
                            Email
                        </label>
                        <input
                            label="Email"
                            id="Email"
                            className={`mb-2 square border border-1 border-squircle ${
                                errname === 'Email' ? 'border-danger' : ''
                            }`}
                            onChange={onChangeValue(setEmail)}
                            autoComplete="off"
                            value={email}
                            type="email"
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
                        <div className="text-center">
                            <MDBBtn
                                className={`mb-3 btn input-width shadow-0 ${
                                    isLoading ? 'disabled' : ''
                                }`}
                                color="success"
                            >
                                Register
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
                <Footer />
            </MDBCol>
        </>
    )
}

export default Signup
