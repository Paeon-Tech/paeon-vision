/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
export default () => {
	importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js')
	tf.setBackend('cpu')
	
	const onMessage = async (event) => {
		const imageData = event.data.imageData;

		// Convert the data URL to an ArrayBuffer
		const response = await fetch(imageData);
		const arrayBuffer = await response.arrayBuffer();
		const blob = new Blob([arrayBuffer]);
		// Create an ImageBitmap from the ArrayBuffer
		const imageBitmap = await createImageBitmap(blob);

		const tensor = tf
			.browser
			.fromPixels(imageBitmap, 3)
			.resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)
		const model = await tf.loadGraphModel('http://localhost:3000/Model/model.json');
		const prediction = await model.predict(tensor).data();
		console.log(prediction)
	}

	self.addEventListener("message", onMessage)
}