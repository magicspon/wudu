import * as T from "prop-types"
import "@/styles/index.css"

function AppRoot({ Component, pageProps }) {
	return <Component {...pageProps} />
}

AppRoot.propTypes = {
	Component: T.any.isRequired,
	pageProps: T.objectOf(T.any),
}

export default AppRoot
