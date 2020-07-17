// import * as T from "prop-types"
import gqlClient from "@/utils/gqlClient"
import pagesQuery from "@/queries/projects"
import Page, { getStaticProps } from "."

export default Page

export { getStaticProps }

export async function getStaticPaths() {
	const data = await gqlClient().request(pagesQuery, {
		skip: null,
		first: null,
	})
	const postPerPage = 2
	const { projects } = data
	const { length } = projects

	const totalPages = Math.ceil(length / postPerPage)
	const paths = Array.from({ length: totalPages }).map((_, i) => ({
		params: {
			currentPage: `${i + 1}`,
		},
	}))

	return {
		paths,
		fallback: true,
	}
}
