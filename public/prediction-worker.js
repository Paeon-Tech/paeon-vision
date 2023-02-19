/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
const worker = () => {
	console.log(navigator.onLine)
	//const LOCAL = 'http://localhost:3000/'
	const LOCAL = 'https://paeonvision.tech/'
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
		sendMessage('TC')

		const model1 = await tf.loadGraphModel(`${LOCAL}Model1/model.json`);
		sendMessage('M1')

		const model2 = await tf.loadGraphModel(`${LOCAL}Model2/model.json`);
		sendMessage('M2')

		const model3 = await tf.loadGraphModel(`${LOCAL}Model3/model.json`);
		sendMessage('M3')

		const model4 = await tf.loadGraphModel(`${LOCAL}Model4/model.json`);
		sendMessage('M4')

		const model5 = await tf.loadGraphModel(`${LOCAL}Model5/model.json`);
		sendMessage('M5')

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

		const startTimeModel4 = performance.now();
		const prediction4 = await model4.predict(tensor).data()
		const endTimeModel4 = performance.now();
		const taskTimeModel4 = endTimeModel4 - startTimeModel4;

		const startTimeModel5 = performance.now();
		const prediction5 = await model5.predict(tensor).data()
		const endTimeModel5 = performance.now();
		const taskTimeModel5 = endTimeModel5 - startTimeModel5;

		const result1 = Array.from(prediction1).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P1', {result1, taskTimeModel1})

		const result2 = Array.from(prediction2).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P2', {result2, taskTimeModel2})

		const result3 = Array.from(prediction3).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P3', {result3, taskTimeModel3})

		const result4 = Array.from(prediction4).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P4', {result4, taskTimeModel4})

		const result5 = Array.from(prediction5).map((p, i) => { 
			return {
				probability: p,
				className: TARGET_CLASSIFICATION[i]
			};
		}).sort((a, b) => {
			return b.probability - a.probability;
		}).slice(0, 2);

		sendMessage('P5', {result5, taskTimeModel5})
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