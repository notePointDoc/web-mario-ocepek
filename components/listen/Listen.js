import React from "react"
import ListenList from "./ListenList"
import styles from "./listen.module.css"

const Listen = ({ trackData, children }) => {
	// COMPONENT RETURN
	return (
		<div className={styles.listen}>
			<ListenList trackData={trackData}></ListenList>
			{children}
		</div>
	)
}

export default Listen
