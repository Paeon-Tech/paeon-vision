import { useState, useEffect } from 'react'

const useFetch = () => {
    const [response, setResponse] = useState('')
    const [image, setImage] = useState('')
    const [iteration, setIteration] = useState('')

    const predictionApi = (image, iteration) => {
        setImage(image)
        setIteration(iteration)
    }

    setResponse('')
    fetch(
        `https://southeastasia.api.cognitive.microsoft.com/customvision/v3.0/Prediction/7db98f08-4938-4a3c-bfec-6c82b52d7fe9/classify/iterations/${iteration}/image`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream',
                'Prediction-Key': '1c3e003089e54d4f83ea0af548cf85b7',
            },
            body: image,
        }
    )
        .then((response) => response.json())
        .then((response) => {
            setResponse(response)
        })
        .catch((error) => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return [predictionApi, response]
}

export default useFetch
