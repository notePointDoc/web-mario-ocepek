import React from "react"
import Image from "next/image"
import styles from "./displayImages.module.css"
const DisplayImages = (props) => {
	const img = props.img
	const currentState = props.currentState
	const imgList = img.map((e) => {
		return (
			<div
				key={e.name}
				className={`${styles[currentState + "-" + e.name]} ${
					styles[currentState + "-img"]
				} ${styles.allImg}`}
			>
				<Image src={e.src} alt={e.name} layout='intrinsic' priority={true}></Image>
			</div>
		)
	})
	return <>{imgList}</>
}
export default DisplayImages
