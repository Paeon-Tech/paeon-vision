import { MDBTypography } from 'mdb-react-ui-kit'

const Overview = () => {
    return (
        <>
            <div className="px-5 pt-3 px-md-0">
                <h1 className="mb-4">Welcome</h1>
                <MDBTypography className="text-justify mb-5">
                    Introducing a revolutionary application that utilizes the
                    power of Image Recognition and Machine Learning to predict
                    Monkeypox virus through skin lesion analysis. This
                    application is built using Microsoft Azure Custom Vision and
                    is aimed to provide an efficient and accurate solution for
                    medical professionals and healthcare providers in detecting
                    the early signs of the virus.
                </MDBTypography>
            </div>
        </>
    )
}

export default Overview
