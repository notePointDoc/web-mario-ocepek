import React from "react"
import Social from "./Social"
import styles from "./footer.module.css"

const Flooter = ({ path }) => {
	return (
		<footer className={styles.footer}>
			<Social path={path}></Social>
			<p style={{ color: path === "/listen" ? "white" : "black" }}>Made by Abe</p>
		</footer>
	)
}

export default Flooter
