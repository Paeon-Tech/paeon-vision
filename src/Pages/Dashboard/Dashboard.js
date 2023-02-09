import { useState, Suspense } from 'react'
import { lazily } from 'react-lazily'
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import NavigationBar from './NavigationBar'
import { Fallback } from '../../Component'
const { Overview, Prediction } = lazily(() => import('../Dashboard'))

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('A')

    const handleClickOverview = () => {
        setCurrentComponent('A')
    }

    const handleClickPrediction = () => {
        setCurrentComponent('B')
    }

    return (
        <main className="row-height">
            <NavigationBar />
            {/* {user_data.data.emailVerified ? '' : <h1>Email not verified</h1>} */}
            <MDBContainer>
                <MDBRow>
                    <div className="mt-5 mb-3 py-3 text-center text-md-start">
                        <MDBBtn
                            color="success shadow-0 me-3"
                            style={
                                currentComponent === 'A' ? { opacity: 0.5 } : {}
                            }
                            onClick={handleClickOverview}
                            size="md"
                        >
                            Overview
                        </MDBBtn>
                        <MDBBtn
                            color="success shadow-0"
                            style={
                                currentComponent === 'B' ? { opacity: 0.5 } : {}
                            }
                            onClick={handleClickPrediction}
                            size="md"
                        >
                            Get started
                        </MDBBtn>
                    </div>
                    <Suspense fallback={<Fallback />}>
                        {currentComponent === 'A' ? <Overview /> : null}
                        {currentComponent === 'B' ? <Prediction /> : null}
                    </Suspense>
                </MDBRow>
            </MDBContainer>
            <div className="text-center small py-5">
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a
                    className="text-reset fw-bold"
                    href="https://paeonvision.tech/"
                >
                    paeonvision.tech
                </a>
            </div>
        </main>
    )
}

export default Dashboard
