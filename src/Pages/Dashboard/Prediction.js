/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef } from 'react'
import { useStateStorage } from '../../Hooks'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import Results from './Results'
import StartPrediction from './StartPrediction'
import Status from './Status'

const Prediction = () => {
    const [state, dispatch] = useStateStorage()
    const fileInput = useRef(null)

    // State
    const [centredModal, setCentredModal] = useState(false)
    const [I1, setI1] = useState('')
    const [I2, setI2] = useState('')
    const [I3, setI3] = useState('')
    const [I4, setI4] = useState('')
    const [I5, setI5] = useState('')

    // Arrays for Accepted Images
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

    const {
        FD,
        BE,
        RI,
        FI,
        AC,
        BC,
        IC,
        TC,
        P1,
        P2,
        P3,
        P4,
        P5,
        PS,
        processedImage,
        selectedFile,
        fileName,
    } = state

    const toggleShow = () => setCentredModal(!centredModal)

    const handleFileInput = (event) => {
        dispatch({
            type: 'SET_STATE',
            payload: {
                selectedFile: '',
                fileName: '',
                processedImage: '',
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
                FD: '',
            },
        })

        setI1('')
        setI2('')
        setI3('')
        setI4('')
        setI5('')
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
                FD: event.target.files[0],
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
    }

    return (
        <>
            <UploadImg
                state={{
                    fileInput,
                    handleFileInput,
                    handleUpload,
                }}
            />
            <DisplayImg
                state={{
                    selectedFile,
                    fileName,
                }}
            />
            <Status
                state={{
                    BE,
                    RI,
                    FI,
                    AC,
                    BC,
                    IC,
                    TC,
                    P1,
                    P2,
                    P3,
                    P4,
                    P5,
                    I1,
                    I2,
                    I3,
                    I4,
                    I5,
                    processedImage,
                }}
            />
            <Results state={{ P1, P2, P3, P4, P5, I1, I2, I3, I4, I5 }} />
            <StartPrediction
                state={{
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
                }}
            />
            <Modal state={{ centredModal, setCentredModal, toggleShow }} />
        </>
    )
}

export default Prediction
