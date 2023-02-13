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
		console.log(`Message Notification from Web Worker [${code}]: ${message}`)
	}

	const onMessage = async (event) => {
		console.log("TensorFlow.js is running on the " + tf.getBackend() + " backend");

		const imageData = event.data.imageData
		const response = await fetch(imageData)

		const arrayBuffer = await response.arrayBuffer()

		const blob = new Blob([arrayBuffer])

		const imageBitmap = await createImageBitmap(blob)

		const tensor = tf
			.browser
			.fromPixels(imageBitmap, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)

		const model = await tf.loadGraphModel('http://localhost:3000/Model/model.json');

		const prediction = await model.predict(tensor).data()

		const result = Array.from(prediction).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('Completed','Completed')
		self.postMessage(result)
		console.table(result)
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