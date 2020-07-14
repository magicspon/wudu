export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query MyQuery {
		homePage(where: { id: "ckcm02d0g03vr0103sx2d4asd" }) {
			title
			body {
				html
			}
			images {
				...imageFragment
			}
			relatedContent {
				... on Page {
					id
					title
					image {
						...imageFragment
					}
				}
				... on Project {
					id
					title
					image {
						...imageFragment
					}
				}
			}
			metaTitle
			metaDescription
			seoImage {
				twitter: url(
					transformation: {
						image: { resize: { fit: crop, width: 400, height: 400 } }
					}
				)
				facebook: url(
					transformation: {
						image: { resize: { fit: crop, width: 600, height: 315 } }
					}
				)
			}
		}
	}
`
