/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useCallback } from 'react'
import { useStateStorage } from '../../Hooks'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import IsOfflineModal from './IsOfflineModal'
import Results from './Results'
import StartPrediction from './StartPrediction'
import Status from './Status'

const Prediction = () => {
    const [state, dispatch] = useStateStorage()
    const fileInput = useRef(null)

    // State
    const [centredModal, setCentredModal] = useState(false)
    const [I3, setI3] = useState('')

	const [IsOffline, setIsOffline] = useState(false)
	const toggleIsOffline = useCallback(() => setIsOffline((IsOffline) => !IsOffline),[IsOffline])

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
        P3,
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
                P3: '',
                FD: '',
            },
        })

        setI3('')
        const file = fileInput.current.files[0]
		console.log(file.size)
		const fileSize = file.size
 		const maxFileSize = 4 * 1024 * 1024

        if (!acceptedImageTypes.includes(file.type) || fileSize > maxFileSize) {
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
                    P3,
                    I3,
                    processedImage,
                }}
            />
            <Results state={{ P3, I3 }} />
            <StartPrediction
                state={{
                    processedImage,
                    dispatch,
                    fileInput,
                    toggleShow,
					toggleIsOffline,
                    PS,
                    FD,
                    setI3,
                }}
            />
            <Modal state={{ centredModal, setCentredModal, toggleShow }} />
			<IsOfflineModal state={{IsOffline, setIsOffline, toggleIsOffline}}/>
        </>
    )
}

export default Prediction
