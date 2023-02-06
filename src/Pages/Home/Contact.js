import NavigationBar from './NavigationBar'
import { API } from '../../Api'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBIcon,
} from 'mdb-react-ui-kit'

const Contact = () => {
    const { social_link } = API

    return (
        <>
            <div className="bg-theme-color-2">
                <MDBRow className="bg-theme-color-1 gx-0 px-md-4">
                    <MDBContainer
                        breakpoint="xxl"
                        className="pt-2 pt-md-3 bg-theme-color-1"
                    >
                        <NavigationBar />
                    </MDBContainer>
                    <MDBContainer className="px-md-3 pt-5 pb-4">
                        <div className="p-3 p-md-5 slide-in-left">
                            <MDBTypography
                                variant="h1"
                                className="fw-bold text-light text-center text-md-start"
                            >
                                Get connected
                                <span className="text-color-1"> with us.</span>
                            </MDBTypography>
                            <p className="mb-3 lh-base fw-normal text-center text-md-start pb-2">
                                If you have any inquiries or something to
                                discuss, Here&nbsp;are&nbsp;the few ways to
                                reach out with us.
                            </p>
                        </div>
                    </MDBContainer>
                </MDBRow>
                <MDBRow className="gx-0 px-2 px-md-4">
                    <MDBContainer className="px-2 px-md-3">
                        <MDBRow className="pt-4 px-3 px-md-5">
                            <MDBCol md="6" lg="2" className="pb-3 pb-md-0">
                                <MDBTypography
                                    variant="h6"
                                    className="text-dark mb-4"
                                >
                                    <MDBIcon
                                        fas
                                        icon="share-alt"
                                        className="me-2"
                                        fixed
                                    />
                                    Social Links
                                </MDBTypography>
                                <div className="small">
                                    {social_link.map((data, index) => {
                                        return (
                                            <p key={index}>
                                                <a
                                                    className="text-reset"
                                                    href={data.link}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                >
                                                    <MDBIcon
                                                        fab
                                                        icon={data.icon}
                                                        className="me-2 rounded-circle"
                                                        border
                                                    />
                                                    {data.name}
                                                </a>
                                            </p>
                                        )
                                    })}
                                </div>
                                <hr className="d-block d-md-none" />
                            </MDBCol>
                            <MDBCol md="6" lg="3" className="pb-3 pb-md-0">
                                <MDBTypography
                                    variant="h6"
                                    className="text-dark mb-4"
                                >
                                    <MDBIcon
                                        fas
                                        icon="envelope"
                                        className="me-2"
                                        fixed
                                    />
                                    Contact
                                </MDBTypography>
                                <p className="small">
                                    <MDBIcon
                                        far
                                        icon="envelope"
                                        className="me-2 rounded-circle"
                                        border
                                    />
                                    customer-service@paeonvision.tech
                                </p>
                                <hr className="d-block d-md-none" />
                            </MDBCol>
                            <MDBCol md="6" lg="4" className="pb-3 pb-md-0">
                                <MDBTypography
                                    variant="h6"
                                    className="text-dark mb-4"
                                >
                                    <MDBIcon
                                        fas
                                        icon="map-marker-alt"
                                        className="me-2"
                                        fixed
                                    />
                                    Address
                                </MDBTypography>
                                <p className="small">
                                    AICS Bldg., Commonwealth Avenue, Corner Holy
                                    Spirit Drive, Don Antonio Heights, Holy
                                    Spirit, Quezon City, Metro Manila,
                                    Philippines.
                                </p>
                                <hr className="d-block d-md-none" />
                            </MDBCol>
                            <MDBCol md="6" lg="3" className="pb-3 pb-md-0">
                                <MDBTypography
                                    variant="h6"
                                    className="text-dark mb-4"
                                >
                                    <MDBIcon
                                        fas
                                        icon="building"
                                        className="me-2"
                                        fixed
                                    />
                                    Paeon Tech
                                </MDBTypography>
                                <p className="small">
                                    Paeon Tech is composed of BSCS Student from
                                    Asian Institute of Computer Studies from
                                    batch 2019.
                                </p>
                                <hr className="d-block d-md-none" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBRow>
                <div className="text-center small pb-4 bg-theme-color-2">
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a
                        className="text-reset fw-bold"
                        href="https://paeonvision.tech/"
                    >
                        paeonvision.tech
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact
