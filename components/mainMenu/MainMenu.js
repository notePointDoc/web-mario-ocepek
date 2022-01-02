import React from "react"
import ButtonList from "./ButtonList"
import styles from "./mainMenu.module.css"
const MainMenu = (props) => {
	const dispatchGlobal = props.dispatchGlobal
	return (
		<ul className={styles.mainMenu}>
			<ButtonList dispatchGlobal={dispatchGlobal}></ButtonList>
		</ul>
	)
}

export default MainMenu
