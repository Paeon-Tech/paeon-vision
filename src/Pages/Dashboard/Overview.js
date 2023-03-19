import { useEffect } from 'react'
import { MDBTypography, MDBIcon } from 'mdb-react-ui-kit'

export default function Overview() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="text-justify small">
            <h5 className="mb-3">
                <MDBIcon fas icon="info-circle" /> Disclaimer
            </h5>
            <MDBTypography>
                Paeon Vision, our Monkeypox skin lesion image classification
                application, is for demonstration and educational purposes only.
                The information and results provided by this application are not
                intended to be used as a substitute for professional medical
                advice, diagnosis, or treatment.
            </MDBTypography>
            <MDBTypography>
                The application is not intended to provide a medical diagnosis
                or to suggest a course of treatment for any particular
                individual or condition. The results provided by this
                application are based on a machine learning algorithm, and as
                such, may not be 100% accurate. The developers of Paeon Vision
                are not liable for any decisions made based on the information
                provided by the application, and the user assumes all risk and
                responsibility for any actions taken as a result of using this
                application.
            </MDBTypography>
            <MDBTypography>
                If you have any concerns about your health or the health of
                someone else, please seek advice from a qualified healthcare
                professional. Do not disregard professional medical advice or
                delay seeking medical treatment because of something you have
                read or received through this application.
            </MDBTypography>
        </div>
    )
}
