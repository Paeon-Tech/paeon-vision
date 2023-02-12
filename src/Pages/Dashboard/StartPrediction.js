import { MDBCol, MDBBtn } from "mdb-react-ui-kit";

const StartPrediction = () => {

	return (
		<MDBCol className="p-3 small">
			<div>
				<MDBBtn
					color="dark"
					className="shadow-0"
					size="sm"
				>
					Start Prediction
				</MDBBtn>
			</div>
		</MDBCol>
	);
};

export default StartPrediction;