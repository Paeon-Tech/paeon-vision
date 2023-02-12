import { useState, useRef } from 'react'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import Results from './Results'
import StartPrediction from './StartPrediction'

const Prediction = () => {
    const [selectedFile, setSelectedFile] = useState('')
    const [fileName, setFileName] = useState('')
	const [loading, setLoading] = useState(false);
	const [processedImage, setProcessedImage] = useState('')
    const fileInput = useRef(null)
	const [centredModal, setCentredModal] = useState(false);
	const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif']

	const toggleShow = () => setCentredModal(!centredModal);

    const handleFileInput = () => {
		const file = fileInput.current.files[0]

		if (!acceptedImageTypes.includes(file.type)) {
			toggleShow()
			setSelectedFile('')
			setFileName('')
			fileInput.current.value = ''
            return
        }

        setFileName(fileInput.current.files[0].name)
    }

    const handleUpload = async () => {
        if (!fileInput.current.files[0]) {
            toggleShow()
            return
        }

        const imageFile = fileInput.current.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setSelectedFile(reader.result)
        })

        setLoading(true);

        reader.readAsDataURL(imageFile)
		reader.onloadend = () => {
			setSelectedFile(reader.result)
		}

		const objectURL = URL.createObjectURL(imageFile)
		setProcessedImage(objectURL)

		setLoading(false)
		console.log('processed image done')
    }


    const handleRemove = () => {
        setSelectedFile('')
        setFileName('')
		setProcessedImage('')
        fileInput.current.value = ''
    }

    return (
        <>
            <UploadImg state={{ fileInput, handleFileInput, handleUpload, loading }} />
			<DisplayImg state={{selectedFile, fileName, handleRemove}} />
            <Results />
			<StartPrediction state={{processedImage}}/>
			<Modal state={{centredModal, setCentredModal, toggleShow}} />
        </>
    )
}

export default Prediction