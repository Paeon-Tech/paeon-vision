import { MDBTypography, MDBBtn } from 'mdb-react-ui-kit'

const WelcomeContent = () => {
    return (
        <div className="px-5">
            <MDBTypography className="text-light text-center text-lg-start title-text my-5 pb-3">
                PAEON
                <br /> VISION
            </MDBTypography>
            <figure className="mt-3 mt-md-4">
                <MDBTypography blockquote>
                    <p className="slide-in-left  text-color-1">
                        Paeon Vision is an image recognition application that
                        uses{' '}
                        <span className="text-light">
                            machine learning model based on microsoft custom
                            vision to detect monkeypox based on skin lesion.
                        </span>
                    </p>
                </MDBTypography>
                <figcaption className="blockquote-footer mt-3">
                    Created by Paeon Tech from AICS Commonwealth Branch
                </figcaption>
            </figure>
            <div className="text-center mt-4 mb-5">
                <MDBBtn
                    tag="a"
                    className="btn-get-started text-center"
                    color="success"
                    href="#login"
                >
                    Get started
                </MDBBtn>
            </div>
        </div>
    )
}

export default WelcomeContent
