import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pageQuery from "@/queries/page"

export default function WhyTreesPage(props) {
	return (
		<div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps() {
	const { page } = await gqlClient().request(pageQuery, {
		slug: "why-trees",
	})

	return {
		props: {
			page,
		},
	}
}
