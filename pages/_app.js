import Layout from "../components/Layout"
import "../styles/globals.css"
import { useRouter } from "next/router"
//
//
function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return (
		<>
			<Layout path={router.pathname}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
