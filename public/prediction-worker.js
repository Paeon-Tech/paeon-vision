/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
const worker = async () => {
	//console.log(navigator.onLine)
	//const LOCAL = 'http://localhost:3000/'
	const LOCAL = 'https://paeonvision.tech/'
	importScripts(`${LOCAL}tf.min.js`)
	tf.setBackend('cpu')

	const TARGET_CLASSIFICATION = {
		0: "Monkeypox",
		1: "Others"
	}

	const model3 = await tf.loadGraphModel(`${LOCAL}Model3/model.json`);
	console.log('Model loaded')
	const sendMessage = (code, message = 'No message') => {
		self.postMessage({code, message})
	}

	const onMessage = async (event) => {

		sendMessage('BE', tf.getBackend())

		const imageData = event.data.imageData
		sendMessage('RI')

		const response = await fetch(imageData)
		sendMessage('FI')

		const arrayBuffer = await response.arrayBuffer()
		sendMessage('AC')

		const blob = new Blob([arrayBuffer])
		sendMessage('BC')

		const imageBitmap = await createImageBitmap(blob)
		sendMessage('IC')

		const tensor = tf
			.browser
			.fromPixels(imageBitmap, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)
		sendMessage('TC')

		const startTimeModel3 = performance.now();
		const prediction3 = await model3.predict(tensor).data()
		const endTimeModel3 = performance.now();
		const taskTimeModel3 = endTimeModel3 - startTimeModel3;

		const result3 = Array.from(prediction3).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P3', {result3, taskTimeModel3})
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