import { useState, useRef } from 'react'
import UploadImg from './UploadImg'
import DisplayImg from './DisplayImg'
import Modal from './Modal'
import Results from './Results'

const Prediction = () => {
    const [selectedFile, setSelectedFile] = useState('')
    const [fileName, setFileName] = useState('')
	const [loading, setLoading] = useState(false);
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

    const handleUpload = () => {
        if (!fileInput.current.files[0]) {
            toggleShow()
            return
        }

        const file = fileInput.current.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setSelectedFile(reader.result)
        })

        setLoading(true);
        reader.readAsDataURL(file)
		reader.onloadend = () => {
			setSelectedFile(reader.result)
			setLoading(false)
		}
    }


    const handleRemove = () => {
        setSelectedFile('')
        setFileName('')
        fileInput.current.value = ''
    }

    return (
        <>
            <UploadImg state={{ fileInput, handleFileInput, handleUpload, loading }}/>
			<DisplayImg state={{selectedFile, fileName, handleRemove}}/>
            <Results />
			<Modal state={{centredModal, setCentredModal, toggleShow}} />
        </>
    )
}

export default Prediction