import React, { useReducer } from "react"
import Menu from "../components/mainMenu/Menu"
import { Language, languageList } from "../context/Language"

const initialState = {
	type: "about",
	language: "english",
	collab: false,
}

const reduce = (globalState, action) => {
	// Change section
	switch (action.type) {
		case "about":
			return { ...globalState, type: action.type }
		case "listen":
			return { ...globalState, type: action.type }
		case "collab":
			return { ...globalState, collab: true }
		default:
			break
	}
	// Change Language
	switch (action.language) {
		case "español":
			return { ...globalState, language: action.language }
		case "english":
			return { ...globalState, language: action.language }
		default:
			break
	}
}

const Layout = ({ children }) => {
	const [globalState, dispatchGlobal] = useReducer(reduce, initialState)
	return (
		<Language.Provider value={languageList[globalState.language]}>
			<Menu dispatchGlobal={dispatchGlobal}></Menu>
			{children}
		</Language.Provider>
	)
}

export default Layout
