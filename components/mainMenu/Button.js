import React from "react"
import { menuVectors } from "../../assets/vectors/mainMenu"
import styles from "./button.module.css"
import Link from "next/link"

const Button = (props) => {
	let link = `/${props.reference}`
	if (props.reference === "about") {
		link = "/"
	}
	return (
		<li className={styles.listElement}>
			<Link href={link} className={styles.link}>
				{props.item}
			</Link>
			{menuVectors}
		</li>
	)
}

export default Button
