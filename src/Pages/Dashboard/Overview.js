import React, { useState } from 'react'

export default function Pverview() {
    const [file, setFile] = useState(null)

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        fetch(
            'https://southeastasia.api.cognitive.microsoft.com/customvision/v3.0/Prediction/7db98f08-4938-4a3c-bfec-6c82b52d7fe9/classify/iterations/Iteration2/image',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Prediction-Key': '1c3e003089e54d4f83ea0af548cf85b7',
                },
                body: file,
            }
        )
            .then((response) => {
                // handle the responsecon
                const reader = response.body.getReader()
                let responseBody = ''

                function readChunk() {
                    return reader.read().then(({ value, done }) => {
                        if (done) {
                            const responseObj = JSON.parse(responseBody)
                            console.log(responseObj)
                            return
                        }

                        responseBody += new TextDecoder().decode(value)
                        return readChunk()
                    })
                }

                return readChunk()
            })
            .catch((error) => {
                // handle errors
            })
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    )
}
