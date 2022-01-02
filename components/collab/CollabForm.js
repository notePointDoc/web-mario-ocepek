import React, { useContext } from "react"
import { Language } from "../../context/Language"
import styles from "./collabForm.module.css"
//
const CollabForm = (props) => {
	const { collab } = useContext(Language)
	const onChangeHandler = props.onChangeHandler
	const onSubmitHandler = props.onSubmitHandler
	return (
		<>
			<h1>{collab.title}</h1>
			<form
				onChange={onChangeHandler}
				className={styles.form}
				onSubmit={onSubmitHandler}
			>
				<label htmlFor='name'>{collab.name}</label>
				<input type='text' name='' id='name' />
				<label htmlFor='email'>{collab.email}</label>
				<input type='text' name='' id='email' />
				<label htmlFor='message'>{collab.message}</label>
				<input type='text' name='' id='message' />
				<input type='checkbox' id='cookies' />
				<button type='submit'>{collab.submit}</button>
			</form>
		</>
	)
}

export default CollabForm
