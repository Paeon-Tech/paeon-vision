import WorkerBuilder from '../../Worker/worker-builder'
import Worker from '../../Worker/prediction-worker'
import { MDBCol, MDBBtn } from "mdb-react-ui-kit";
import * as tf from '@tensorflow/tfjs'


const StartPrediction = ({state: {processedImage}}) => {

	// Initiating web worker
	const instance = new WorkerBuilder(Worker)
	instance.addEventListener('message', (e) => {
			console.log(e.data)
		})

	const handlePrediction = async () => {

		const image = new Image()
		image.src = processedImage
		await image.decode()


		const tensor = tf
			.browser
			.fromPixels(image, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)

		console.log('Preprocessed using TF')
		instance.postMessage(tensor)
	}

	return (
		<MDBCol className="p-3 small">
			<div>
				<MDBBtn
					color="dark"
					className="shadow-0"
					size="sm"
					onClick={handlePrediction}
				>
					Start Prediction
				</MDBBtn>
			</div>
		</MDBCol>
	);
};

export default StartPrediction;