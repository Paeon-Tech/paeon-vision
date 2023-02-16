/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
const worker = () => {
	const LOCAL = 'http://localhost:3000/'
	// const LOCAL = 'https://paeonvision.tech/'
	importScripts(`${LOCAL}tf.min.js`)
	tf.setBackend('cpu')

	const TARGET_CLASSIFICATION = {
		0: "Monkeypox",
		1: "Others"
	}

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
		sendMessage('tensor_creation')

		const model1 = await tf.loadGraphModel(`${LOCAL}Model1/model.json`);
		sendMessage('M1')

		const model2 = await tf.loadGraphModel(`${LOCAL}Model2/model.json`);
		sendMessage('M2')

		const model3 = await tf.loadGraphModel(`${LOCAL}Model3/model.json`);
		sendMessage('M3')

		const startTimeModel1 = performance.now();
		const prediction1 = await model1.predict(tensor).data()
		const endTimeModel1 = performance.now();
		const taskTimeModel1 = endTimeModel1 - startTimeModel1;

		const startTimeModel2 = performance.now();
		const prediction2 = await model2.predict(tensor).data()
		const endTimeModel2 = performance.now();
		const taskTimeModel2 = endTimeModel2 - startTimeModel2;

		const startTimeModel3 = performance.now();
		const prediction3 = await model3.predict(tensor).data()
		const endTimeModel3 = performance.now();
		const taskTimeModel3 = endTimeModel3 - startTimeModel3;

		const result1 = Array.from(prediction1).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('Prediction1', {result1, taskTimeModel1})

		const result2 = Array.from(prediction2).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('Prediction2', {result2, taskTimeModel2})

		const result3 = Array.from(prediction3).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('Prediction3', {result3, taskTimeModel3})
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