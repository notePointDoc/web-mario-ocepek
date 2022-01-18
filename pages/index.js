import About from "../components/about/About.js"

import Modal from "react-modal"
//
// APP COMPONENT
function App() {
	Modal.setAppElement("#__next")
	return <About></About>
}

export default App
