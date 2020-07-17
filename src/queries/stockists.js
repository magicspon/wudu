export default /* GraphQL */ `
	fragment imageFragment on Asset {
		id
		handle
		height
		fileName
		altText
		width
	}

	query StockistsQuery {
		stockist(where: { id: "ckcm49koo05tb0108y3glkcw5" }) {
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
			stockists {
				image {
					...imageFragment
				}
				body {
					html
				}
				email
				facebook
				id
				instagram
				linkedIn
				telephone
				title
				twitter
				location {
					longitude
					latitude
				}
			}
		}
	}
`
