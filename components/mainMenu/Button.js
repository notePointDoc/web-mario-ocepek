import React from "react"
import { menuVectors } from "../../assets/vectors/mainMenu"
import styles from "./button.module.css"
import Link from "next/link"

const Button = ({ reference, item }) => {
	let link = `/${reference}`
	let asLink = `/${reference}`
	if (reference === "about") {
		link = "/"
		asLink = "/"
	}
	if (reference === "collab") {
		link = ""
		asLink = "/collab"
	}
	return (
		<li className={styles.listElement}>
			<Link href={link} as={asLink} className={styles.link}>
				{item}
			</Link>
			{menuVectors}
		</li>
	)
}

export default Button
