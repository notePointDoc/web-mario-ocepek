import React from "react"
import styles from "./collab.module.css"
import CollabForm from "./CollabForm"
//

// COMPONENT
const Collab = (props) => {
	return (
		<div className={styles.backdrop}>
			<div className={styles.formContainer}>
				<CollabForm
					onChangeHandler={props.onChangeHandler}
					onSubmitHandler={props.onSubmitHandler}
				></CollabForm>
			</div>
		</div>
	)
}

export default Collab
