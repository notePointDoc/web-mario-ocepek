import React, { useRef } from "react"
import styles from "./listenItem.module.css"

const ListenItem = ({ fetch, id, image, audioClassName, audio, name }) => {
	// State Declaration
	const refAudio = useRef()
	const refContainer = useRef()
	//Fetch Object with Item Instance References and data
	const onClickHandler = () => {
		fetch({ audio: refAudio.current, id: id, container: refContainer.current })
	}
	// Handlers of state
	const onEndedHandler = () => {
		fetch({ audio: refAudio.current, id: id, container: refContainer.current })
	}

	return (
		<div
			className={`${styles.track} ${styles.inactive}`}
			onClick={onClickHandler}
			ref={refContainer}
		>
			<p>{name}</p>
			<img src={image[1].url} alt='discs' animate={{ scale: "120%" }} />

			<audio ref={refAudio} onEnded={onEndedHandler} className={audioClassName}>
				<source src={audio} />
			</audio>
		</div>
	)
}

export default ListenItem
