export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query ResourcesQuery {
		resources {
			title
			weblink
			id
			image {
				...imageFragment
			}
		}
	}
`
