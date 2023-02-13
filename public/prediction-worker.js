/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
const worker = () => {
	importScripts('http://localhost:3000/Model/tf.min.js')
	tf.setBackend('cpu')

	const TARGET_CLASSIFICATION = {
		0: "Monkeypox",
		1: "Others"
	}
	
	const sendMessage = (code, message) => {
		self.postMessage({code, message})
	}

	const onMessage = async (event) => {
		sendMessage('backend', tf.getBackend())

		const imageData = event.data.imageData
		sendMessage('received_imageData','ImageData Received by Web Worker')

		const response = await fetch(imageData)
		sendMessage('fetch_image',"ImageData Fetch Completed")

		const arrayBuffer = await response.arrayBuffer()
		sendMessage('arrayBuffer_creation', 'arrayBuffer creation for fetched image Completed')

		const blob = new Blob([arrayBuffer])
		sendMessage('blob_creation', 'blob creation for arrayBuffer Completed')

		const imageBitmap = await createImageBitmap(blob)
		sendMessage('imageBitmap_creation', 'imageBitmap creation for blob Completed')

		const tensor = tf
			.browser
			.fromPixels(imageBitmap, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)
		sendMessage('tensor_creation', 'tensor creation for imageBitmap Completed')

		const model = await tf.loadGraphModel('http://localhost:3000/Model/model.json');
		sendMessage('load_model', 'loading model.json completed')

		const startTime = performance.now();
		const prediction = await model.predict(tensor).data()
		const endTime = performance.now();
		const taskTime = endTime - startTime;

		const result = Array.from(prediction).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('Prediction', {result, taskTime})
	}

	self.addEventListener("message", onMessage)
}

class WorkerBuilder extends Worker {
	constructor(worker) {
		const code = worker.toString();
		const blob = new Blob([`(${code})()`]);
		return new Worker(URL.createObjectURL(blob));
	}
}

// eslint-disable-next-line no-unused-vars
const prediction_worker = new WorkerBuilder(worker)