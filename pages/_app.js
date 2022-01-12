import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import "../styles/globals.css"
import { useRouter } from "next/router"
import Modal from "react-modal"
import Collab from "../components/collab/Collab"
//
//
function MyApp({ Component, pageProps }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const router = useRouter()
	// Sets reference element for the modal to next root
	Modal.setAppElement("#__next")
	useEffect(() => {
		if (router.asPath === "/collab") {
			setIsModalOpen((prevState) => {
				return !prevState
			})
		}
	}, [router.asPath])

	// MODAL STYLES
	const overlay = {
		background: "radial-gradient(#000000, #00000098)",
		zIndex: "10",
	}
	const content = {
		left: "0",
		position: "relative",
		margin: "0 auto",
		width: "fit-content",
		height: "fit-content",
		background: "none",
		border: "none",
		overflow: "visible",
		zIndex: "9",
	}
	return (
		<>
			<Layout path={router.pathname}>
				<Modal
					preventScroll={false}
					isOpen={isModalOpen}
					shouldCloseOnEsc={true}
					shouldFocusAfterRender={true}
					onRequestClose={() => {
						router.back()
						setIsModalOpen(false)
					}}
					style={{ overlay: overlay, content: content }}
				>
					<Collab setIsModalOpen={setIsModalOpen}></Collab>
				</Modal>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
