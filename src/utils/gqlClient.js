import { GraphQLClient } from "graphql-request"

let gql

function gqlClient() {
	if (gql) return gql
	gql = new GraphQLClient(`${process.env.GRAPHCMS_PROJECT_API}`, {
		headers: {
			authorization: `Bearer ${process.env.GRAPHCMS_DEV_AUTH_TOKEN}`,
		},
	})

	return gql
}

export default gqlClient
