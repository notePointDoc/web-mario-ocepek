import React from "react"
import styles from "./aboutSlide.module.css"
import AboutText from "./AboutText"
import Slide from "./Slide"

const AboutSlide = ({ state }) => {
	return (
		<>
			<AboutText className={styles.aboutText} state={state}></AboutText>
			<Slide state={state}></Slide>
		</>
	)
}

export default AboutSlide
