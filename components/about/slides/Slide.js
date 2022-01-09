import React, { useState, useEffect, useRef } from "react"
import useAnimation from "../../../hooks/useAnimation"
import styles from "./slide.module.css"
import { points } from "../../../assets/about/points"
import SlideItem from "./SlideItem"
import {
	frstSlideVectors,
	secndSlideVectors,
	thirdSlideVectors,
} from "../../../assets/about/vectors"
import marioRedondo from "../../../assets/about/marioRedondo.png"
import polaroidOne from "../../../assets/about/polaroidOne.png"
import polaroidTwo from "../../../assets/about/polaroidTwo.png"
import polaroidThree from "../../../assets/about/polaroidThree.png"
import concertsOne from "../../../assets/about/concertsOne.png"
import concertsTwo from "../../../assets/about/concertsTwo.png"
import concertsThree from "../../../assets/about/concertsThree.png"

//
// CONSTANTS
const slideObject = {
	about: {
		elements: ["circle", "circleSuperSmall", "circleSmall", "oval"],
		img: [{ name: "marioRedondo", src: marioRedondo }],
		vectors: frstSlideVectors,
	},
	work: {
		elements: ["diamond", "rectangle", "circleBig", "circleSmall", "trapezoid"],
		img: [
			{ name: "polaroidOne", src: polaroidOne },
			{ name: "polaroidTwo", src: polaroidTwo },
			{ name: "polaroidThree", src: polaroidThree },
		],
		vectors: secndSlideVectors,
	},
	concerts: {
		elements: ["concertsTwoDiv", "concertsThreeDiv", "someDiv"],
		img: [
			{ name: "concertsOne", src: concertsOne },
			{ name: "concertsTwo", src: concertsTwo },
			{ name: "concertsThree", src: concertsThree },
		],
		vectors: thirdSlideVectors,
	},
}
//
// COMPONENT
const Slide = ({ state }) => {
	// Constants
	const slide = slideObject[state]
	console.log(state)
	const ref = useRef()
	useAnimation(ref, styles)
	// ComponentReturn
	return (
		<div className={`${styles[state]} ${styles.dontAnimate}`} ref={ref}>
			<SlideItem
				elements={slide.elements}
				vectors={slide.vectors}
				img={slide.img}
				state={state}
			>
				{points}
			</SlideItem>
		</div>
	)
}
export default Slide
