import React from "react"
import styles from "./slideItem.module.css"

import DisplayVectors from "./Display/DisplayVectors"
import DisplayImages from "./Display/DisplayImages"
import DisplayElements from "./Display/DisplayElements"
const SlideItems = (props) => {
	// Constants
	const currentState = props.state
	return (
		<div className={`${styles.reference}`}>
			{props.children}
			<DisplayImages
				styles={styles}
				vectors={props.vectors}
				currentState={currentState}
				img={props.img}
			></DisplayImages>
			<DisplayElements
				styles={styles}
				vectors={props.vectors}
				currentState={currentState}
				elements={props.elements}
			></DisplayElements>
			<DisplayVectors
				styles={styles}
				vectors={props.vectors}
				currentState={currentState}
			></DisplayVectors>
		</div>
	)
}

export default SlideItems
