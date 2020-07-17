import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pagesQuery from "@/queries/projects"
import pageQuery from "@/queries/project"

export default function ProjectPost({ data }) {
	console.log("ProjectPage")
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const data = await gqlClient().request(pageQuery, { slug: params.slug })
	return {
		props: {
			data,
		},
	}
}

export async function getStaticPaths() {
	const data = await gqlClient().request(pagesQuery, {
		skip: null,
		first: null,
	})

	const paths = data.projects.map((page) => ({
		params: {
			slug: page.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
