import * as React from "react"
// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import projectsQuery from "@/queries/projects"
import pageQuery from "@/queries/page"

export default function ProjectIndexPage(props) {
	return (
		<div>
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	)
}

export async function getStaticProps({ params }) {
	const currentPage = params?.currentPage || 0
	const postPerPage = 2

	const data = await gqlClient().request(projectsQuery, {
		skip: currentPage * postPerPage,
		first: postPerPage,
	})

	const { page } = await gqlClient().request(pageQuery, {
		slug: "projects",
	})

	return {
		props: {
			page,
			entries: data.projects.map((project) => ({
				...project,
				url: `/projects/post/${project.slug}`,
			})),
			currentPage,
		},
	}
}
