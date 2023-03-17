/* eslint-disable no-undef */
import { useState } from 'react'
import { MDBCol, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({
    state: {
        processedImage,
        dispatch,
        fileInput,
        toggleShow,
        PS,
        FD,
        setI1,
        setI2,
        setI3,
        setI4,
        setI5,
    },
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
				FD: "",
                BE: '',
                RI: '',
                FI: '',
                AC: '',
                BC: '',
                IC: '',
                TC: '',
                P1: '',
                P2: '',
                P3: '',
                P4: '',
                P5: '',
                PS: '',
            },
        })
        setI1('')
        setI2('')
        setI3('')
        setI4('')
        setI5('')
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
            })
        }

        if (e.data.code === 'P4') {
            handleState({
                P4: {
                    result: e.data.message.result4,
                    time: e.data.message.taskTimeModel4,
                },
            })
        }

        if (e.data.code === 'P5') {
            handleState({
                P5: {
                    result: e.data.message.result5,
                    time: e.data.message.taskTimeModel5,
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
                P1: '',
                P2: '',
                P3: '',
                P4: '',
                P5: '',
                PS: '',
            },
        })

        setI1('')
        setI2('')
        setI3('')
        setI4('')
        setI5('')

        if (!processedImage) {
            toggleShow()
            return
        }

        dispatch({ type: 'SET_STATE', payload: { PS: true } })

        if (useApi) {
            fetchApi(
                FD,
                'Iteration1',
                '7db98f08-4938-4a3c-bfec-6c82b52d7fe9',
                '1c3e003089e54d4f83ea0af548cf85b7',
                'southeastasia.api.cognitive.microsoft.com',
                setI1
            )
            fetchApi(
                FD,
                'Iteration2',
                '7db98f08-4938-4a3c-bfec-6c82b52d7fe9',
                '1c3e003089e54d4f83ea0af548cf85b7',
                'southeastasia.api.cognitive.microsoft.com',
                setI2
            )
            fetchApi(
                FD,
                'Iteration3',
                '7db98f08-4938-4a3c-bfec-6c82b52d7fe9',
                '1c3e003089e54d4f83ea0af548cf85b7',
                'southeastasia.api.cognitive.microsoft.com',
                setI3
            )
            fetchApi(
                FD,
                'Iteration1',
                'abdc4481-38db-4bb0-b3d2-772cac927696',
                '8890ab6c61d649688cf22b12a81515da',
                'southcentralus.api.cognitive.microsoft.com',
                setI4
            )
            fetchApi(
                FD,
                'Iteration2',
                'abdc4481-38db-4bb0-b3d2-772cac927696',
                '8890ab6c61d649688cf22b12a81515da',
                'southcentralus.api.cognitive.microsoft.com',
                setI5
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
