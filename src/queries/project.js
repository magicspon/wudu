export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query ProjectQuery($slug: String) {
		project(where: { slug: $slug }) {
			title
			slug
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
