/* eslint-disable no-undef */
import { useState } from 'react'
import { MDBCol, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({
    state: { processedImage, dispatch, fileInput, toggleShow, PS, FD, setI3 },
}) => {
    const [useApi, setUseApi] = useState(false)

    const toggleApi = () => setUseApi((isShown) => !isShown)

    const handleState = (payload) => {
        dispatch({
            type: 'SET_STATE',
            payload,
        })
    }

    const fetchApi = (
        image,
        iteration,
        projectId,
        predictionKey,
        resources,
        callback
    ) => {
        const startTime = performance.now()
        fetch(
            `https://${resources}/customvision/v3.0/Prediction/${projectId}/classify/iterations/${iteration}/image`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Prediction-Key': predictionKey,
                },
                body: image,
            }
        )
            .then((response) => response.json())
            .then((response) => {
                const endTime = performance.now()
                const taskTime = endTime - startTime
                callback({ response, taskTime })
            })
            .catch((error) => console.error(error))
    }

    const handleClearResult = () => {
        dispatch({
            type: 'SET_STATE',
            payload: {
                selectedFile: '',
                fileName: '',
                loading: '',
                processedImage: '',
                FD: '',
                BE: '',
                RI: '',
                FI: '',
                AC: '',
                BC: '',
                IC: '',
                TC: '',
                P3: '',
                PS: '',
            },
        })
        setI3('')
        fileInput.current.value = ''
    }

    const handleWorkerMessage = (e) => {
        if (e.data.code === 'BE') {
            handleState({ BE: e.data.message })
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
                P3: '',
                PS: '',
            },
        })

        setI3('')

        if (!processedImage) {
            toggleShow()
            return
        }

        dispatch({ type: 'SET_STATE', payload: { PS: true } })

        if (useApi) {
            fetchApi(
                FD,
                'Iteration3',
                '7db98f08-4938-4a3c-bfec-6c82b52d7fe9',
                '1c3e003089e54d4f83ea0af548cf85b7',
                'southeastasia.api.cognitive.microsoft.com',
                setI3
            )

            dispatch({ type: 'SET_STATE', payload: { PS: false } })
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
            <div className="pb-2">
                <input
                    className="form-check-input mb-3"
                    id="flexCheckDefault"
                    type="checkbox"
                    name="flexCheck"
                    value=""
                    onChange={toggleApi}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Use Custom Vision API?
                </label>
            </div>
            <div>
                <MDBBtn
                    outline
                    color="dark"
                    className="shadow-0 me-2"
                    disabled={PS ? true : false}
                    onClick={handlePrediction}
                >
                    {PS ? (
                        <>
                            <span className="me-2">Please wait</span>
                            <MDBSpinner color="dark" size="sm">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </MDBSpinner>
                        </>
                    ) : (
                        'Start Prediction'
                    )}
                </MDBBtn>
                <MDBBtn
                    outline
                    color="danger"
                    className="shadow-0"
                    disabled={PS ? true : false}
                    onClick={handleClearResult}
                >
                    Clear
                </MDBBtn>
            </div>
        </MDBCol>
    )
}

export default StartPrediction
