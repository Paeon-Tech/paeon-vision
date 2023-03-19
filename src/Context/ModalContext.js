import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";

const ModalContext = createContext()

export const ModalContextProvider = ({children}) => {
	const { userLogout } = UserAuth()
    const navigate = useNavigate()

	const [centredModal1, setCentredModal1] = useState(false)
	
	const toggleShow1 = () => setCentredModal1(!centredModal1)

	const logout = () => {
		try {
			userLogout()
			navigate('/')
		} catch (error) {
			console.log(error.message)
		}
	}

	return (
		<ModalContext.Provider value={{centredModal1, toggleShow1, setCentredModal1, logout}}>
			{children}
		</ModalContext.Provider>
	)
} 

export const ModalState = () => {
	return useContext(ModalContext)
}
