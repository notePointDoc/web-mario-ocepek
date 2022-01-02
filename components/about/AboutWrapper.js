import React from "react"
import styles from "./aboutWrapper.module.css"
const MenuWrapper = (props) => {
	return <section className={styles.aboutWrapper}>{props.children}</section>
}

export default MenuWrapper
