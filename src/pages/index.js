import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pageQuery from "@/queries/home"

export default function IndexPage({ data }) {
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps() {
	const data = await gqlClient().request(pageQuery)

	return {
		props: {
			data,
		},
	}
}
