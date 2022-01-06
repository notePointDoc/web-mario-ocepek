import React from "react"
import styles from "./aboutWrapper.module.css"
const MenuWrapper = ({ children }) => {
	return <section className={styles.aboutWrapper}>{children}</section>
}

export default MenuWrapper
