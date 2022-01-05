import React from "react"
import styles from "./collab.module.css"
import CollabForm from "./CollabForm"
import Image from "next/image"
import collabSinFondo from "../../assets/collab/collabSinFondo.png"
//

// COMPONENT
const Collab = (props) => {
	return (
		<div className={styles.collabContainer}>
			<CollabForm
				onChangeHandler={props.onChangeHandler}
				onSubmitHandler={props.onSubmitHandler}
				className={styles.form}
			></CollabForm>
			<div className={styles.image}>
				<Image src={collabSinFondo} layout='fill'></Image>
			</div>
		</div>
	)
}

export default Collab
