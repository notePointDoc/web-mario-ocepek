import React from "react"
import ListenList from "./ListenList"
import styles from "./listen.module.css"

const Listen = (props) => {
	// COMPONENT RETURN
	console.log(props.trackData)
	return (
		<div className={styles.listen}>
			<ListenList trackData={props.trackData}></ListenList>
		</div>
	)
}

export default Listen
