import { MDBCol, MDBBtn } from 'mdb-react-ui-kit'

const StartPrediction = ({ state: { processedImage, setPrediction } }) => {
    // Initiating web worker

    // eslint-disable-next-line no-undef
    prediction_worker.addEventListener('message', (e) => {
        console.log('Message from Web Worker')
        console.log(e.data)
        setPrediction(e.data)
    })

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
