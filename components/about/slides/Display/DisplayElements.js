import React from "react"
import styles from "./displayElements.module.css"

const DisplayElements = (props) => {
	const elements = props.elements
	const currentState = props.currentState
	const divElements = elements.map((e) => {
		return (
			<div
				className={`${styles[currentState + "-" + e]} ${
					styles[currentState + "-elements"]
				}`}
				key={e.toString()}
			></div>
		)
	})
	return <>{divElements}</>
}
export default DisplayElements
