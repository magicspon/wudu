export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query ProjectsQuery($skip: Int, $first: Int) {
		projects(skip: $skip, first: $first, orderBy: publishedAt_DESC) {
			slug
			title
			id
			image {
				...imageFragment
			}
		}
	}
`
