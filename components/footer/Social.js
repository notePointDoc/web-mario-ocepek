import React from "react"
import styles from "./social.module.css"
import { SocialIcon } from "react-social-icons"
const Social = ({ path }) => {
	return (
		<div className={styles.socialContainer}>
			<SocialIcon
				url='https://www.instagram.com/mariocepek/?hl=es'
				bgColor={path === "/listen" ? "white" : "#833AB4"}
			></SocialIcon>
			<SocialIcon
				url='https://open.spotify.com/artist/1JaWSutBh9WPbhUYaXHcDJ?si=tQBJSQv_RmOqzERgN3WeOw'
				bgColor={path === "/listen" ? "white" : "#28D84F"}
			></SocialIcon>
			<SocialIcon
				url='https://www.youtube.com/channel/UChLKhxs-96DJGLhk-_6ju-Q'
				bgColor={path === "/listen" ? "white" : "red"}
			></SocialIcon>
		</div>
	)
}

export default Social
