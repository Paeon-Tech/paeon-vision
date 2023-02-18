import { useState } from "react";

const useFetch = () => {
	const [data, setData] = useState('')
    const predictionApi = (image, iteration) => {

        fetch(
            `https://southeastasia.api.cognitive.microsoft.com/customvision/v3.0/Prediction/7db98f08-4938-4a3c-bfec-6c82b52d7fe9/classify/iterations/${iteration}/image`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Prediction-Key': '1c3e003089e54d4f83ea0af548cf85b7',
                },
                body:image,
            }
        )
            .then(response=> response.json())
  .then(data => {
    setData(data)
    // The response body contains the predictions
  })
  .catch(error => console.error(error));
  return data
    }

    return predictionApi
}

export default useFetch
