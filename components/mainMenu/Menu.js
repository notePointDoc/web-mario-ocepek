import React from "react"
import LanguageMenu from "./LanguageMenu"
import MainMenu from "./MainMenu"
import styles from "./menu.module.css"

const Menu = ({ dispatchGlobal }) => {
	// Constants
	return (
		<nav className={styles.menu}>
			<MainMenu dispatchGlobal={dispatchGlobal}></MainMenu>
			<LanguageMenu dispatchGlobal={dispatchGlobal}></LanguageMenu>
		</nav>
	)
}

export default Menu
