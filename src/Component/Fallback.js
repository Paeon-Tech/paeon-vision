import { MDBSpinner } from "mdb-react-ui-kit";

const Fallback = () => {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
			<MDBSpinner color='success' size="xl">
				<span className='visually-hidden'>Loading...</span>
			</MDBSpinner>
		</div>
	);
};

export default Fallback;