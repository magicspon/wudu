import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pagesQuery from "@/queries/projects"

export default function ProjectIndexPage({ data }) {
	return (
		<div>
			<pre>{JSON.stringify({ data }, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const currentPage = params?.currentPage || 0

	const data = await gqlClient().request(pagesQuery, {
		skip: currentPage * 2,
		first: 2,
	})

	return {
		props: {
			data: data.projects.map((project) => ({
				...project,
				url: `/projects/post/${project.slug}`,
			})),
		},
	}
}
