import NavigationBar from './NavigationBar'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
} from 'mdb-react-ui-kit'
import { API } from '../../Api'

const About = () => {
    const { team_member } = API
    return (
        <>
            <MDBContainer className="bg-theme-color-2 m-0 p-0" fluid>
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
                        <MDBCol className="small">
                            <MDBListGroup
                                light
                                className="d-flex justify-content-center"
                            >
                                {team_member.map((data, index) => {
                                    return (
                                        <MDBListGroupItem
                                            key={index}
                                            className="d-flex bg-theme-color-2 justify-content-between align-items-center"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={data.img_src}
                                                    alt="Team Member"
                                                    style={{
                                                        width: '45px',
                                                        height: '45px',
                                                    }}
                                                    className="rounded-circle"
                                                />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">
                                                        {data.name}
                                                    </p>
                                                    <p className="text-muted mb-0">
                                                        {data.email}
                                                    </p>
                                                    {data.badge.map(
                                                        (data, index) => {
                                                            return (
                                                                <MDBBadge
                                                                    key={index}
                                                                    pill
                                                                    light
                                                                    color={
                                                                        data.color
                                                                    }
                                                                >
                                                                    {
                                                                        data.badge_name
                                                                    }
                                                                </MDBBadge>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </MDBListGroupItem>
                                    )
                                })}
                            </MDBListGroup>
                        </MDBCol>
                    </MDBRow>
                </div>
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
