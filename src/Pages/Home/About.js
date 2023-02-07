import NavigationBar from './NavigationBar'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBListGroup,
    MDBListGroupItem,
    MDBBadge,
	MDBCard,
} from 'mdb-react-ui-kit'
import { API } from '../../Api'

const About = () => {
    const { team_member } = API
    return (
        <>
            <MDBContainer className="bg-theme-color-3 m-0 p-0" fluid>
                <MDBRow className="bg-theme-color-1 gx-0 px-md-4">
                    <MDBContainer
                        breakpoint="xxl"
                        className="pt-2 pt-md-3 bg-theme-color-1"
                    >
                        <NavigationBar />
                    </MDBContainer>
                    
                </MDBRow>
				<MDBContainer>
					<MDBRow className='g-4 px-3 py-5 small'>
						<MDBTypography
                            variant="h1"
                            className="fw-bold text-dark text-center pb-3"
                        >
                            Meet the Team
                        </MDBTypography>
						{
							team_member.map((data, index) => {
								return (
									<MDBCol key={index} lg="4">
										<MDBCard className='h-100 shadow-0'>
											<MDBListGroupItem
												key={index}
												className="d-flex py-4 bg-theme-color-2 justify-content-between align-items-center"
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
														<p className="text-muted mb-2">
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
										</MDBCard>
									</MDBCol>
								)
							})
						}
					</MDBRow>
				</MDBContainer>
					<div className="text-center small pb-4 bg-theme-color-3">
						&copy; {new Date().getFullYear()} Copyright:{' '}
						<a
							className="text-reset fw-bold"
							href="https://paeonvision.tech/"
						>
							paeonvision.tech
						</a>
					</div>
            </MDBContainer>
        </>
    )
}

export default About
