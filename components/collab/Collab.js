import React, { useState, useReducer } from "react"
import styles from "./collab.module.css"
import CollabForm from "./CollabForm"
import Image from "next/image"
import collabSinFondo from "../../assets/collab/collabSinFondo.png"
import PulseLoader from "react-spinners/PulseLoader"
import { useRouter } from "next/router"
// Init state
const initState = {
	isValid: {
		userName: true,
		email: true,
		message: true,
		cookies: true,
		general: false,
	},
	info: {
		userName: "",
		email: "",
		message: "",
		cookies: false,
	},
}
// Main function that controll everything
const reducer = (state, action) => {
	switch (action.type) {
		case "info":
			return {
				isValid: { ...state.isValid },
				info: { ...state.info, [action.target]: action.data },
			}
		case "isValid":
			return {
				isValid: { ...state.isValid, [action.target]: action.data },
				info: { ...state.info },
			}
		case "init":
			return { ...initState }
		case "initValid":
			return { info: { ...state.info }, isValid: { ...initState.isValid } }
	}
}
// COMPONENT
const Collab = ({ setIsModalOpen }) => {
	const [data, setData] = useReducer(reducer, initState)
	const [isLoading, setIsLoading] = useState(false)
	const [animated, setAnimated] = useState(false)
	const router = useRouter()
	// Checks if the input is wright
	const checkInput = () => {
		let response = true
		// Checks message format
		if (data.info.message.length === 0) {
			setData({ type: "isValid", target: "message", data: false })
			response = false
		}
		// Checks email format
		const email = data.info.email
		if (!email.includes("@") || email.includes(" ")) {
			setData({ type: "isValid", target: "email", data: false })
			response = false
		}
		// checks name format
		if (data.info.userName.length === 0) {
			setData({ type: "isValid", target: "userName", data: false })
			response = false
		}
		// checks if accept cookies is checked
		if (!data.info.cookies) {
			setData({ type: "isValid", target: "cookies", data: false })
			response = false
		}

		setData({ type: "isValid", target: "general", data: !response })
		return response
	}
	// Recollects input on every strike
	const onChangeHandler = (event) => {
		setData({ type: "initValid" })
		// If the key is a checkbox, then check chekced status
		if (event.target.id === "cookies") {
			setData({ type: "info", target: "cookies", data: event.target.checked })
		} else {
			setData({ type: "info", target: event.target.id, data: event.target.value })
		}
	}
	// Calls checkInput and, if format is right.
	const onSubmitHandler = (event) => {
		event.preventDefault()
		const input = checkInput()
		if (input) {
			// Sends the user data to the API
			setIsLoading(true)
			fetch("/api/contact", {
				method: "POST",
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data.info),
			}).then((res) => {
				if (res.status === 200) {
					setAnimated(true)
					setTimeout(() => {
						setAnimated(false)
						setIsModalOpen(false)
						router.back()
					}, 1500)
				} else {
				}
				setIsLoading(false)
			})
		} else {
			console.log("The form is not right!!!")
		}
	}
	return (
		<>
			<div className={styles.collabContainer}>
				<CollabForm
					onChangeHandler={onChangeHandler}
					onSubmitHandler={onSubmitHandler}
					className={styles.form}
					isValid={data.isValid}
				></CollabForm>
				<div className={styles.image}>
					<Image src={collabSinFondo} layout='fill'></Image>
				</div>
			</div>
			<PulseLoader
				color='#FFFB95'
				css={`
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate(-50%, -50%);
				`}
				loading={isLoading}
				size={20}
			></PulseLoader>
			<div
				className={styles.marioFace}
				style={{
					opacity: animated ? "1" : "0",
					animationPlayState: animated ? "running" : "paused",
				}}
			></div>
		</>
	)
}

export default Collab
