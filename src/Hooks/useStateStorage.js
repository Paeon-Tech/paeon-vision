import { useReducer } from 'react'

const initialState = {
    selectedFile: '',
    fileName: '',
    processedImage: '',
    FD: '',
    BE: '',
    RI: '',
    FI: '',
    AC: '',
    BC: '',
    IC: '',
    TC: '',
    P3: '',
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
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}

export default useStateStorage
