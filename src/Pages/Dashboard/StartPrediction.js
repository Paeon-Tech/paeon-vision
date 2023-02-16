/* eslint-disable no-undef */
import { MDBCol, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({
    state: { processedImage, dispatch, fileInput, PS, toggleShow },
}) => {
    const handleClearResult = () => {
        dispatch({
            type: 'SET_STATE',
            payload: {
                selectedFile: '',
                fileName: '',
                loading: '',
                processedImage: '',
                BE: '',
                RI: '',
                FI: '',
                AC: '',
                BC: '',
                IC: '',
                TC: '',
                M1: '',
                M2: '',
                M3: '',
                P1: '',
                P2: '',
                P3: '',
            },
        })
        fileInput.current.value = ''
    }

    const handleState = (payload) => {
        dispatch({
            type: 'SET_STATE',
            payload,
        })
    }

    const handleWorkerMessage = (e) => {
        console.log(`Message from Web Worker [${e.data.message}]`)

        if (e.data.code === 'BE') {
            handleState({ BE: e.data.message, PS: true })
        }

        if (e.data.code === 'RI') {
            handleState({ RI: true })
        }

        if (e.data.code === 'FI') {
            handleState({ FI: true })
        }

        if (e.data.code === 'AC') {
            handleState({ AC: true })
        }

        if (e.data.code === 'BC') {
            handleState({ BC: true })
        }

        if (e.data.code === 'IC') {
            handleState({ IC: true })
        }

        if (e.data.code === 'TC') {
            handleState({ TC: true })
        }

        if (e.data.code === 'M1') {
            handleState({ M1: true })
        }

        if (e.data.code === 'M2') {
            handleState({ M2: true })
        }

        if (e.data.code === 'M3') {
            handleState({ M3: true })
        }

        if (e.data.code === 'P1') {
            handleState({
                P1: {
                    result: e.data.message.result1,
                    time: e.data.message.taskTimeModel1,
                },
            })
        }

        if (e.data.code === 'P2') {
            handleState({
                P2: {
                    result: e.data.message.result2,
                    time: e.data.message.taskTimeModel2,
                },
            })
        }

        if (e.data.code === 'P3') {
            handleState({
                P3: {
                    result: e.data.message.result3,
                    time: e.data.message.taskTimeModel3,
                },
                PS: '',
            })
            prediction_worker.removeEventListener(
                'message',
                handleWorkerMessage
            )
        }
    }

    const handlePrediction = async () => {
        dispatch({
            type: 'SET_STATE',
            payload: {
                BE: '',
                RI: '',
                FI: '',
                AC: '',
                BC: '',
                IC: '',
                TC: '',
                M1: '',
                M2: '',
                M3: '',
                P1: '',
                P2: '',
                P3: '',
            },
        })
        if (!processedImage) {
            toggleShow()
            return
        }
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
                    disabled={PS ? true : false}
                    onClick={handlePrediction}
                >
                    {PS ? (
					<>
                        <MDBSpinner color="light" size='sm' className='me-2'>
                            <span className="visually-hidden">Loading...</span>
                        </MDBSpinner>
						Please wait
					</>
                    ) : (
                        'Start Prediction'
                    )}
                </MDBBtn>
                <MDBBtn
                    color="danger"
                    className="shadow-0"
                    size="sm"
                    onClick={handleClearResult}
                >
                    Clear
                </MDBBtn>
            </div>
        </MDBCol>
    )
}

export default StartPrediction
