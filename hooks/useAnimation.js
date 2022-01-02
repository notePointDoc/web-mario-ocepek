import { useEffect } from "react"

const useAnimation = (ref, styles) => {
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0,
	}
	const removeNotAnimate = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove(styles.dontAnimate)
				entry.target.classList.add(styles.staticAnimation)
			}
			if (!entry.isIntersecting) {
				entry.target.classList.add(styles.dontAnimate)
			}
		})
	}
	useEffect(() => {
		let observer = new IntersectionObserver(removeNotAnimate, options)
		observer.observe(ref.current)
	}, [])
}

export default useAnimation
