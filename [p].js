import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pagesQuery from "@/queries/projects"

export default function ProjectIndexPage({ data, params }) {
	console.log("hello")
	return (
		<div>
			<pre>{JSON.stringify({ data, params }, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const data = await gqlClient().request(pagesQuery, {
		offset: null,
		first: null,
	})

	return {
		props: {
			params,
			data,
		},
	}
}

export async function getStaticPaths() {
	const data = await gqlClient().request(pagesQuery, {
		skip: null,
		first: null,
	})

	const paths = ["2", "3"].map((page) => ({
		params: {
			p: page,
		},
	}))

	return {
		paths,
		fallback: true,
	}
}
