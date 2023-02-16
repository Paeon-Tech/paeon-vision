/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useCallback } from 'react'
import { useStateStorage } from '../../Hooks'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import Results from './Results'
import StartPrediction from './StartPrediction'
import Status from './Status'

const Prediction = () => {
    const [state, dispatch] = useStateStorage()
    const {BE, RI, FI, AC, BC, IC, TC, M1, M2, M3, P1, P2, P3, processedImage} = state
    const fileInput = useRef(null)
    const [centredModal, setCentredModal] = useState(false)
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

    const toggleShow = useCallback(
        () => setCentredModal(!centredModal),
        [centredModal]
    )

    const handleFileInput = () => {
        const file = fileInput.current.files[0]

        if (!acceptedImageTypes.includes(file.type)) {
            toggleShow()
            dispatch({
                type: 'SET_STATE',
                payload: {
                    selectedFile: '',
                    fileName: '',
                },
            })

            fileInput.current.value = ''
            return
        }

        dispatch({
            type: 'SET_STATE',
            payload: {
                fileName: fileInput.current.files[0].name,
            },
        })
    }

    const handleUpload = async () => {
        if (!fileInput.current.files[0]) {
            toggleShow()
            return
        }

        const imageFile = fileInput.current.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            dispatch({
                type: 'SET_STATE',
                payload: {
                    selectedFile: reader.result,
                },
            })
        })

        dispatch({
            type: 'SET_STATE',
            payload: {
                loading: true,
            },
        })

        reader.readAsDataURL(imageFile)
        reader.onloadend = () => {
            dispatch({
                type: 'SET_STATE',
                payload: {
                    selectedFile: reader.result,
                },
            })
        }

        const objectURL = URL.createObjectURL(imageFile)
        dispatch({
            type: 'SET_STATE',
            payload: {
                processedImage: objectURL,
            },
        })

        dispatch({
            type: 'SET_STATE',
            payload: {
                loading: false,
            },
        })
        console.log('processed image done')
    }

    const handleRemove = () => {
        dispatch({
            type: 'SET_STATE',
            payload: {
                selectedFile: '',
                fileName: '',
                processedImage: '',
                prediction: '',
            },
        })
        fileInput.current.value = ''
    }

    return (
        <>
            <UploadImg
                state={{
                    fileInput,
                    handleFileInput,
                    handleUpload,
                    loading: state.loading,
                }}
            />
            <DisplayImg
                state={{
                    selectedFile: state.selectedFile,
                    fileName: state.fileName,
                    handleRemove,
                }}
            />
            <Status state={{BE, RI, FI, AC, BC, IC, TC, M1, M2, M3, P1, P2, P3, processedImage}}/>
            <Results state={{ prediction: state.prediction }} />
            <StartPrediction
                state={{ processedImage: state.processedImage, dispatch }}
            />
            <Modal state={{ centredModal, setCentredModal, toggleShow }} />
        </>
    )
}

export default Prediction
