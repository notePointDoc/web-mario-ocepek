import React, { useState } from "react"
import AboutWrapper from "./AboutWrapper"
import AboutSlide from "./slides/AboutSlide"
import styles from "./about.module.css"

// Constants and reducer
const slideData = ["about", "work", "concerts"]
// Actual Component
const About = () => {
	const slides = slideData.map((e) => {
		return (
			<div className={`${styles[e]} ${styles.section}`} key={e}>
				<AboutSlide state={e}></AboutSlide>
			</div>
		)
	})
	return <AboutWrapper>{slides}</AboutWrapper>
}

export default About
