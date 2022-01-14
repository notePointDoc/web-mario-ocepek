import React, { useReducer, useState } from "react"
import Menu from "../components/mainMenu/Menu"
import { Language, languageList } from "../context/Language"
import StarLayout from "./listen/StarLayout"
import Footer from "../components/footer/Footer"

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

const Layout = ({ children, path }) => {
	const [globalState, dispatchGlobal] = useReducer(reduce, initialState)
	return (
		<>
			{path === "/listen" && <StarLayout></StarLayout>}
			<Language.Provider value={languageList[globalState.language]}>
				<Menu dispatchGlobal={dispatchGlobal} />
				{children}
				<Footer path={path} />
			</Language.Provider>
		</>
	)
}

export default Layout
