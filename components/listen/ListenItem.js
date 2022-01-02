import React, { useRef } from "react"
import styles from "./listenItem.module.css"

const ListenItem = (props) => {
	// State Declaration
	const fetch = props.fetch
	const refAudio = useRef()
	const refContainer = useRef()
	const id = props.id
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
			<p>{props.name}</p>
			<img src={props.image} alt='' animate={{ scale: "120%" }} />

			<audio
				ref={refAudio}
				onEnded={onEndedHandler}
				className={props.audioClassName}
			>
				<source src={props.audio} />
			</audio>
		</div>
	)
}

export default ListenItem
