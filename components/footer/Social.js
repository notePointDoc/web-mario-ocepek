import React from "react"
import styles from "./social.module.css"
import { SocialIcon } from "react-social-icons"
const Social = () => {
	return (
		<div className={styles.socialContainer}>
			<SocialIcon
				url='https://www.instagram.com/mariocepek/?hl=es'
				bgColor='#833AB4'
			></SocialIcon>
			<SocialIcon
				url='https://open.spotify.com/artist/1JaWSutBh9WPbhUYaXHcDJ?si=tQBJSQv_RmOqzERgN3WeOw'
				bgColor='#28D84F'
			></SocialIcon>
			<SocialIcon url='https://www.youtube.com/channel/UChLKhxs-96DJGLhk-_6ju-Q'></SocialIcon>
		</div>
	)
}

export default Social
