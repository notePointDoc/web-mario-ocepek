import React from "react"
import styles from "./displayVectors.module.css"
//
const DisplayVectors = (props) => {
	const vectors = props.vectors
	const currentState = props.currentState
	const arr = []
	for (const property in vectors) {
		arr.push(
			<span
				className={`${styles[currentState + "-" + property]} ${
					styles[currentState + "-vectors"]
				} ${styles.vectors}`}
				key={property}
			>
				{vectors[property]}
			</span>
		)
	}
	return <>{arr}</>
}

export default DisplayVectors
