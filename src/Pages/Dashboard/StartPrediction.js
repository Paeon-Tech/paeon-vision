/* eslint-disable no-undef */
import { MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({ state: { processedImage, setPrediction } }) => {
    const handleWorkerMessage = (e) => {
        console.log(`Message from Web Worker [${e.data.message}]`)

        if (e.data.code === 'Prediction1') {
            console.log(e.data.message.taskTimeModel1)
            setPrediction(e.data.message.result1)
        }

        if (e.data.code === 'Prediction2') {
            console.log(e.data.message.taskTimeModel2)
            setPrediction(e.data.message.result2)
        }

        if (e.data.code === 'Prediction3') {
            console.log(e.data.message.taskTimeModel3)
            setPrediction(e.data.message.result3)

            // Remove the event listener once Prediction3 is received
            prediction_worker.removeEventListener(
                'message',
                handleWorkerMessage
            )
        }
    }

    const handlePrediction = async () => {
        prediction_worker.addEventListener('message', handleWorkerMessage)
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
                    className="shadow-0 me-2"
                    size="sm"
                    onClick={handlePrediction}
                >
                    Start Prediction
                </MDBBtn>
                <MDBBtn
                    color="danger"
                    className="shadow-0"
                    size="sm"
                    onClick={handlePrediction}
                >
                    Clear Result
                </MDBBtn>
            </div>
        </MDBCol>
    )
}

export default StartPrediction
