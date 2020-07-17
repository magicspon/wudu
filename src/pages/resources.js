import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import resourcesQuery from "@/queries/resources"
import pageQuery from "@/queries/page"

export default function ResourcesPage(props) {
	return (
		<div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps() {
	const { page } = await gqlClient().request(pageQuery, {
		slug: "resources",
	})

	const { resources } = await gqlClient().request(resourcesQuery)

	return {
		props: {
			page,
			resources,
		},
	}
}
