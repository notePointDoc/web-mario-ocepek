import React, { useState } from "react"
import AboutWrapper from "./AboutWrapper"
import AboutSlide from "./slides/AboutSlide"
import styles from "./about.module.css"

// Constants and reducer
const initState = ["about", "work", "concerts"]
// Actual Component
const About = () => {
	const [state, setState] = useState(initState)
	const slides = state.map((e) => {
		return (
			<div className={`${styles[e]} ${styles.section}`}>
				<AboutSlide state={e}></AboutSlide>
			</div>
		)
	})
	return <AboutWrapper>{slides}</AboutWrapper>
}

export default About
