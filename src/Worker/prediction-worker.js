/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-anonymous-default-export */
export default () => {
	importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.2.0')
	tf.setBackend('cpu')
	
	const onMessage = async (evt) => {
		console.log('Hello from web worker')
		console.log(evt.data)
		const model = await tf.loadGraphModel('http://localhost:3000/Model/model.json');
		const prediction = await model.predict(evt.data).data()
		console.log(prediction)
	}

	self.addEventListener("message", onMessage)
}