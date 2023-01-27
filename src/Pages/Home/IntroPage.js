import { MDBCol } from 'mdb-react-ui-kit'
import NavigationBar from './NavigationBar'
import WelcomeContent from './WelcomeContent'

const IntroPage = () => {
    return (
        <MDBCol
            xl="8"
            className="title-component px-1 px-md-4 pt-2 pt-md-3 bg-theme-color-1 py-auto"
        >
            <NavigationBar />
            <WelcomeContent />
        </MDBCol>
    )
}

export default IntroPage
