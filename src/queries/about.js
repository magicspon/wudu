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
		about(where: { id: "ckcm1w17k04o001179s6gweeb" }) {
			title
			intro {
				html
			}
			body {
				html
			}
			image {
				...imageFragment
			}
			profilePicture {
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
			timeline {
				id
				text
				title
				date
				image {
					...imageFragment
				}
			}
		}
	}
`
