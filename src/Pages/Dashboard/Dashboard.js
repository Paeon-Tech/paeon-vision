import { useState } from 'react'
import { MDBContainer, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import NavigationBar from './NavigationBar'
import { Overview, Prediction } from '../Dashboard'

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('A')

    const handleClickOverview = () => {
        setCurrentComponent('A')
    }

    const handleClickPrediction = () => {
        setCurrentComponent('B')
    }

    return (
        <main>
            <NavigationBar />
            {/* {user_data.data.emailVerified ? '' : <h1>Email not verified</h1>} */}
            <MDBContainer>
                <MDBRow className='px-4'>
                    <div className="my-3 px-0 py-3">
                        <MDBBtn
                            color="success shadow-0 me-3 small"
                            style={
                                currentComponent === 'A' ? { opacity: 0.5 } : {}
                            }
                            onClick={handleClickOverview}
                            size="md"
                        >
                            Overview
                        </MDBBtn>
                        <MDBBtn
                            color="success shadow-0 small"
                            style={
                                currentComponent === 'B' ? { opacity: 0.5 } : {}
                            }
                            onClick={handleClickPrediction}
                            size="md"
                        >
                            Get started
                        </MDBBtn>
                    </div>
                </MDBRow>
				<MDBRow className='px-4'>
                        {currentComponent === 'A' ? <Overview /> : null}
                        {currentComponent === 'B' ? <Prediction /> : null}
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
