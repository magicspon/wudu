import * as React from "react"
// import * as T from "prop-types"
import slugify from "slugify"
import gqlClient from "@/utils/gqlClient"
import pagesQuery from "@/queries/pages"
import pageQuery from "@/queries/page"

export default function PagePage({ data }) {
	console.log("funky")
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
	const data = await gqlClient().request(pagesQuery)

	const paths = data.pages.map((page) => ({
		params: {
			slug: page.slug,
		},
	}))

	return {
		paths,
		fallback: true,
	}
}
