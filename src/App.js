import { useState } from 'react';
import logo from './logo.svg';
import * as tf from '@tensorflow/tfjs';
import './Assets/css/App.css';

function App() {

	const TARGET_CLASSES = {
		0: "Monkeypox",
		1: "Others"
	}

	const [prediction, setPredition] = useState(null)
	const [loading, setLoading] = useState(false)
	
	async function predictionFunction(image) {
		setLoading(true)
		const model = await tf.loadGraphModel('Models/model.json');
		const prediction1 = await model.predict(image).data();
		setPredition(prediction1)
		setLoading(false)
		console.log(prediction1)

		let x = Array.from(prediction1).map(function (p, i) { // this is Array.map
			return {
				probability: p,
				className: TARGET_CLASSES[i] // we are selecting the value from the obj
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 2);
		console.log(x)
	};

	const handleFileChange = async (e) => {
    const imageFile = e.target.files[0]
		const objectURL = URL.createObjectURL(imageFile)
    const image = new Image()
    image.src = objectURL
    await image.decode()

    const tensor = tf.browser.fromPixels(image, 3).resizeNearestNeighbor([224, 224])
			.expandDims()
			.toFloat()
			.reverse(-1)
		predictionFunction(tensor)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
				<input type="file" onChange={(e) => handleFileChange(e)} />
				{
					prediction && <p>Success</p>
				}
				{
					loading && <p>Loading</p>
				}
      </header>
    </div>
  );
}

export default App;
