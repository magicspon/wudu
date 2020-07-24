import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pageQuery from "@/queries/home"
import GraphImg from "graphcms-image"

export default function IndexPage({ data }) {
	const { images } = data.homePage

	console.log({ data })

	return (
		<div>
			<div>
				{images.map((image) => (
					<GraphImg key={image.id} image={image} maxWidth={800} />
				))}
			</div>
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
