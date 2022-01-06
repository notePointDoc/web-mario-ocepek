import React, { useContext } from "react"
import { Language } from "../../context/Language"
import styles from "./collabForm.module.css"
//
const CollabForm = ({ onChangeHandler, onSubmitHandler }) => {
	const { collab } = useContext(Language)
	// NAME: name, email, message, cookies
	return (
		<>
			<h1 className={styles.h1}>{collab.title}</h1>
			<form
				autoComplete='off'
				onChange={onChangeHandler}
				className={styles.form}
				onSubmit={onSubmitHandler}
			>
				<span>
					<label htmlFor='name'>{collab.name}:</label>
					<input type='text' name='' id='name' />
				</span>
				<span>
					<label htmlFor='email'>{collab.email}:</label>
					<input type='text' name='' id='email' />
				</span>
				<span className={styles.message}>
					<label htmlFor='message'>{collab.message}:</label>
					<textarea type='text' name='message' id='message' />
				</span>
				<span className={styles.cookies}>
					<input type='checkbox' id='cookies' />
					<label htmlFor='cookies'>Acepto el uso de mis datos para tal cual</label>
				</span>
				<span className={styles.buttonContainer}>
					<button type='submit' className={styles.button}>
						{collab.submit}
					</button>
				</span>
			</form>
		</>
	)
}

export default CollabForm
