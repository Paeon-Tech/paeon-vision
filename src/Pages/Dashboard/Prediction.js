/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from 'react'
import { useStateStorage } from '../../Hooks'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import Results from './Results'
import StartPrediction from './StartPrediction'
import Status from './Status'

const Prediction = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(count + 1)
        console.log(count)
    }, [])
    const [state, dispatch] = useStateStorage()
    const {
        FD,
        BE,
        RI,
        FI,
        AC,
        BC,
        IC,
        TC,
        M1,
        M2,
        M3,
        M4,
        P1,
        P2,
        P3,
        P4,
        I1,
        I2,
        I3,
        PS,
        processedImage,
        loading,
        selectedFile,
        fileName,
    } = state
    const fileInput = useRef(null)
    const [centredModal, setCentredModal] = useState(false)
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

    const toggleShow = () => setCentredModal(!centredModal)

    const handleFileInput = (event) => {
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
                P4: '',
                I1: '',
                I2: '',
                I3: '',
                FD: '',
            },
        })
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

    return (
        <>
            <UploadImg
                state={{
                    fileInput,
                    handleFileInput,
                    handleUpload,
                    loading,
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
                    M1,
                    M2,
                    M3,
                    M4,
                    P1,
                    P2,
                    P3,
                    P4,
                    I1,
                    I2,
                    I3,
                    processedImage,
                }}
            />
            <Results state={{ P1, P2, P3, P4, I1, I2, I3 }} />
            <StartPrediction
                state={{
                    processedImage,
                    dispatch,
                    fileInput,
                    toggleShow,
                    PS,
                    FD,
                }}
            />
            <Modal state={{ centredModal, setCentredModal, toggleShow }} />
        </>
    )
}

export default Prediction
