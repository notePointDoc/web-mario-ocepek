import React from "react"
import LanguageMenu from "./LanguageMenu"
import MainMenu from "./MainMenu"
import styles from "./menu.module.css"

const Menu = (props) => {
	// Constants
	return (
		<nav className={styles.menu}>
			<MainMenu dispatchGlobal={props.dispatchGlobal}></MainMenu>
			<LanguageMenu dispatchGlobal={props.dispatchGlobal}></LanguageMenu>
		</nav>
	)
}

export default Menu
