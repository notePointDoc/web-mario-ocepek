import React from "react"
import Social from "./Social"
import styles from "./footer.module.css"

const Flooter = () => {
	return (
		<footer className={styles.footer}>
			<Social></Social>
			<p>Made by Abe</p>
		</footer>
	)
}

export default Flooter
