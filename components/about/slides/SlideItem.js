import React from "react"
import styles from "./slideItem.module.css"

import DisplayVectors from "./Display/DisplayVectors"
import DisplayImages from "./Display/DisplayImages"
import DisplayElements from "./Display/DisplayElements"
const SlideItems = ({ state, children, img, vectors, elements }) => {
	// Constants
	return (
		<div className={`${styles.reference}`} name={state}>
			{children}
			<DisplayImages
				styles={styles}
				vectors={vectors}
				currentState={state}
				img={img}
			></DisplayImages>
			<DisplayElements
				styles={styles}
				vectors={vectors}
				currentState={state}
				elements={elements}
			></DisplayElements>
			<DisplayVectors
				styles={styles}
				vectors={vectors}
				currentState={state}
			></DisplayVectors>
		</div>
	)
}

export default SlideItems
