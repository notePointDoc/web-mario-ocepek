import React from "react"
import { spanishFlag, englishFlag } from "../../assets/vectors/mainMenu"
import styles from "./languageMenu.module.css"
// COMPONENT
const LanguageMenu = ({ dispatchGlobal }) => {
	// Constants

	//
	// Handlers
	const changeToSpanish = () => {
		dispatchGlobal({ language: "español" })
	}
	const changeToEnglish = () => {
		dispatchGlobal({ language: "english" })
	}
	return (
		<div className={styles.languageMenu}>
			<button onClick={changeToSpanish}>{spanishFlag}</button>
			<button onClick={changeToEnglish}>{englishFlag}</button>
		</div>
	)
}
export default LanguageMenu
