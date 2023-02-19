/* eslint-disable no-undef */
import { useState } from 'react'
import { useFetch } from '../../Hooks'
import { MDBCol, MDBBtn, MDBSpinner, MDBCheckbox } from 'mdb-react-ui-kit'
import React from 'react'

const StartPrediction = ({
    state: { processedImage, dispatch, fileInput, PS, toggleShow, FD},
}) => {
	const predictionApi = useFetch()
	const [useApi, setUseApi] = useState(false)
	const toggleApi = () => setUseApi((isShown) => !isShown)
	console.log(useApi)
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
                M4: '',
                P1: '',
                P2: '',
                P3: '',
                P4: '',
                PS: '',
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

        if (e.data.code === 'M1') {
            handleState({ M1: true })
        }

        if (e.data.code === 'M2') {
            handleState({ M2: true })
        }

        if (e.data.code === 'M3') {
            handleState({ M3: true })
        }

        if (e.data.code === 'M4') {
            handleState({ M4: true })
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
                PS: '',
            })
            prediction_worker.removeEventListener(
                'message',
                handleWorkerMessage
            )
        }
    }

    const handlePrediction = async () => {
		console.log(useApi)
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
                M4: '',
                P1: '',
                P2: '',
                P3: '',
                P4: '',
                PS: '',
            },
        })
        if (!processedImage) {
            toggleShow()
            return
        }

        dispatch({ type: 'SET_STATE', payload: { PS: true } })

		if(useApi) {
			console.log('use api activated')
			const startAPI1 = performance.now()
			const API1 = predictionApi(FD,'Iteration1')
			const endAPI1 = performance.now()
			const timeAPI1 = endAPI1 - startAPI1
			console.log(timeAPI1.toFixed(2))
			const startAPI2 = performance.now()
			const API2 = predictionApi(FD,'Iteration2')
			const endAPI2 = performance.now()
			const timeAPI2 = endAPI2 - startAPI2
			console.log(timeAPI2.toFixed(2))
			const startAPI3 = performance.now()
			const API3 = predictionApi(FD,'Iteration3')
			const endAPI3 = performance.now()
			const timeAPI3 = endAPI3 - startAPI3
			console.log(timeAPI3.toFixed(2))
			console.table(API1)
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
			<div className='pb-2'>
				<input className="form-check-input mb-3" id="flexCheckDefault" type="checkbox" name="flexCheck" value="" onChange={toggleApi}/>
				<label className="form-check-label" htmlFor="flexCheckDefault">Use Custom Vision API?</label>
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
