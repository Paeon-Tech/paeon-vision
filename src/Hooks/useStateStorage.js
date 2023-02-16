import { useReducer } from 'react'

const initialState = {
    selectedFile: '',
    fileName: '',
    loading: '',
    processedImage: '',
    prediction: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

const useStateStorage = () => {
    const [state, dispatch] = useReducer(initialState, reducer)
    return [state, dispatch]
}

export default useStateStorage
