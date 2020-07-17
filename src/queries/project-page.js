export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query AboutQuery {
		page(where: { id: "ckcm5c1ps069a01174nmqjgbl" }) {
			title
			body {
				html
			}
			image {
				...imageFragment
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
