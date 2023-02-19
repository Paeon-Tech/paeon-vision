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
	M1: '',
	M2: '',
	M3: '',
	M4: '',
	M5: '',
	P1: '',
	P2: '',
	P3: '',
	P4: '',
	P5: '',
	PS: ''
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
