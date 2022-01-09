import React, { useReducer, useMemo, useEffect, useState } from "react"
import styles from "./listenList.module.css"
import ListenItem from "./ListenItem"

// Current State
const initState = { id: undefined, audio: undefined, container: undefined }
// REDUCER FUNCTION
const reduce = (prevState, action) => {
	// If click in audio that is playing...
	if (prevState.audio === action.audio) {
		action.audio.pause() //Pause the audio
		action.container.classList.remove(styles.active)
		action.container.classList.add(styles.inactive) //PROVISIONAL: Transición
		//Clears state
		return { audio: undefined, id: undefined, container: undefined }
		// If
	} else if (prevState.audio !== action.audio) {
		if (prevState.audio !== undefined) {
			prevState.audio.pause()
			prevState.container.classList.remove(styles.active)
			prevState.audio.currentTime = 0
		}
		action.container.classList.add(styles.active)
		action.audio.play()
		return { ...action }
	} else {
	}
}
//
// COMPONENT
const ListenList = ({ trackData }) => {
	// State declaration
	const [state, fetch] = useReducer(reduce, initState)
	const trackList = trackData.map((e) => {
		const { name, preview_url, image } = e
		return (
			<ListenItem
				name={name}
				id={preview_url}
				audio={preview_url}
				image={image}
				fetch={fetch}
				key={preview_url}
			></ListenItem>
		)
	})
	return <>{trackList}</>
}

export default ListenList
