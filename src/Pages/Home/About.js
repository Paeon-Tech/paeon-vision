import NavigationBar from './NavigationBar'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
} from 'mdb-react-ui-kit'

const About = () => {
    return (
        <>
            <MDBContainer className="bg-theme-color-2 m-0 p-0" fluid>
                <MDBRow className="bg-theme-color-1 gx-0 px-3 px-md-4">
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
                                className="fw-bold text-light text-start"
                            >
                                Who we{' '}
                                <span className="text-color-1">are.</span>
                            </MDBTypography>
                            <MDBTypography className="mb-3 text-start">
                                We are Paeon Tech, composed of students from the
                                Asian Institute of Computer Studies taking
                                Bachelor of Science in Computer Science, where
                                we are dedicated to learning and growing as
                                professionals, and we look forward to applying
                                our skills and knowledge to real-world problems
                                and projects.
                            </MDBTypography>
                        </div>
                    </MDBContainer>
                </MDBRow>
                <div className="bg-theme-color-2 px-3 px-md-5 py-5">
                    <MDBRow className=" px-3 px-md-5">
                        <MDBTypography
                            variant="h1"
                            className="fw-bold text-dark text-start pb-4"
                        >
                            Meet the Team.
                        </MDBTypography>
                        <MDBCol xl="6" className="small">
                            <MDBListGroup light>
                                <MDBListGroupItem className="d-flex bg-theme-color-2 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                John Carlo T. Fababeir
                                            </p>
                                            <p className="text-muted mb-0">
                                                johncarlofababeir@outlook.com
                                            </p>
                                            <MDBBadge
                                                pill
                                                light
                                                color="success"
                                            >
                                                Software Developer
                                            </MDBBadge>
                                            <MDBBadge
                                                pill
                                                light
                                                color="info"
                                                className="ms-2"
                                            >
                                                Project Manager
                                            </MDBBadge>
                                        </div>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex bg-theme-color-2 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                Cedric Paul B. Dawal
                                            </p>
                                            <p className="text-muted mb-0">
                                                bernabecedric1@gmail.com
                                            </p>
                                            <MDBBadge
                                                pill
                                                light
                                                color="warning"
                                            >
                                                Researcher
                                            </MDBBadge>
                                        </div>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex bg-theme-color-2 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                Romano D. Lotao
                                            </p>
                                            <p className="text-muted mb-0">
                                                lutaolester10@gmail.com
                                            </p>
                                            <MDBBadge
                                                pill
                                                light
                                                color="warning"
                                            >
                                                Researcher
                                            </MDBBadge>
                                        </div>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCol>
                        <MDBCol xl="6">
                            <MDBListGroup light className="small">
                                <MDBListGroupItem className="d-flex bg-theme-color-2 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                Crischelle Jay D. Florita
                                            </p>
                                            <p className="text-muted mb-0">
                                                cjflorita01@gmail.com
                                            </p>
                                            <MDBBadge
                                                pill
                                                light
                                                color="warning"
                                            >
                                                Researcher
                                            </MDBBadge>
                                        </div>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex bg-theme-color-2 justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                            }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">
                                                Fely L. Mariano
                                            </p>
                                            <p className="text-muted mb-0">
                                                felymariano0211@gmail.com
                                            </p>
                                            <MDBBadge
                                                pill
                                                light
                                                color="warning"
                                            >
                                                Researcher
                                            </MDBBadge>
                                        </div>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCol>
                    </MDBRow>
                </div>
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
                                    <p>
                                        <MDBIcon
                                            fab
                                            icon="facebook"
                                            className="me-2 rounded-circle"
                                            border
                                        />
                                        Facebook
                                    </p>
                                    <p>
                                        <MDBIcon
                                            fab
                                            icon="twitter"
                                            className="me-2 rounded-circle"
                                            border
                                        />
                                        Twitter
                                    </p>
                                    <p>
                                        <MDBIcon
                                            fab
                                            icon="instagram"
                                            className="me-2 rounded-circle"
                                            border
                                        />
                                        Instagram
                                    </p>
                                    <p>
                                        <MDBIcon
                                            fab
                                            icon="github"
                                            className="me-2 rounded-circle"
                                            border
                                        />
                                        Github
                                    </p>
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
                                    paeonvision@gmail.com
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
                        href="https://paeonvision.web.app/"
                    >
                        paeonvision.web.app
                    </a>
                </div>
            </MDBContainer>
        </>
    )
}

export default About
