import { useEffect } from 'react'
import { MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({ state: { processedImage, setPrediction } }) => {
	useEffect(() => {
		// eslint-disable-next-line no-undef
		prediction_worker.addEventListener('message', (e) => {
			console.log(`Message from Web Worker [${e.data.message}]`)

			// if(e.data.code === 'backend'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'received_imageData'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'fetch_image'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'arrayBuffer_creation'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'blob_creation'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'imageBitmap_creation'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'tensor_creation'){
			// 	setPrediction(e.data.message)
			// }
			// if(e.data.code === 'load_model'){
			// 	setPrediction(e.data.message)
			// }
			if(e.data.code === 'Prediction'){
				console.log(e.data.message.taskTime)
				setPrediction(e.data.message.result)
			}
		})
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    const handlePrediction = async () => {
        const image = new Image()
        image.src = processedImage
        await image.decode()

        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0)
        const imageData = canvas.toDataURL()

        // eslint-disable-next-line no-undef
        prediction_worker.postMessage({ imageData })
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
    )
}

export default StartPrediction
