import React from "react"
import styles from "./aboutSlide.module.css"
import AboutText from "./AboutText"
import Slide from "./Slide"

const AboutSlide = (props) => {
	const state = props.state
	return (
		<>
			<AboutText className={styles.aboutText} state={state}></AboutText>
			<Slide state={props.state}></Slide>
		</>
	)
}

export default AboutSlide
