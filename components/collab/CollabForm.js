import React, { useContext } from "react"
import { Language } from "../../context/Language"
import styles from "./collabForm.module.css"
//
const CollabForm = ({ onChangeHandler, onSubmitHandler, isValid }) => {
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
					<label
						htmlFor='userName'
						style={{ color: isValid.userName ? "black" : "red" }}
					>
						{collab.name}:{" "}
					</label>
					<input
						type='text'
						name=''
						id='userName'
						style={{ borderColor: isValid.userName ? "black" : "red" }}
					/>
				</span>
				<span>
					<label htmlFor='email' style={{ color: isValid.email ? "black" : "red" }}>
						{collab.email}:{" "}
					</label>
					<input
						type='text'
						name=''
						id='email'
						style={{ borderColor: isValid.email ? "black" : "red" }}
					/>
				</span>
				<span className={styles.message}>
					<label
						htmlFor='message'
						style={{ color: isValid.message ? "black" : "red" }}
					>
						{collab.message}:{" "}
					</label>
					<textarea
						type='text'
						name='message'
						id='message'
						style={{ borderColor: isValid.message ? "black" : "red" }}
					/>
				</span>
				<span className={styles.cookies}>
					<input
						type='checkbox'
						id='cookies'
						style={{ backgroundColor: isValid.cookies ? "black" : "red" }}
					/>
					<label
						htmlFor='cookies'
						style={{ color: isValid.cookies ? "black" : "red" }}
					>
						Acepto el uso de mis datos para tal cual
					</label>
				</span>
				<span className={styles.buttonContainer}>
					<button type='submit' className={styles.button} disabled={isValid.general}>
						{collab.submit}
					</button>
				</span>
			</form>
		</>
	)
}

export default CollabForm
