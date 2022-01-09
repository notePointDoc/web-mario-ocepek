import React, { useContext } from "react"
import styles from "./aboutText.module.css"
import { Language } from "../../../context/Language"
const AboutText = (props) => {
	// Constants
	const ctx = useContext(Language)
	const title = ctx.text[props.state].title
	const paragraph = ctx.text[props.state].paragraph
	//
	return (
		<>
			<h1 className={`${styles[`${props.state}-title`]} ${styles.h1}`}>{title}</h1>
			<p className={`${styles[`${props.state}-paragraph`]} ${styles.p}`}>
				{paragraph}
			</p>
		</>
	)
}

export default AboutText
