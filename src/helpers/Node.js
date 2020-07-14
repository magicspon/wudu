import * as React from "react"
import { string, node, element, func, object, oneOfType } from "prop-types"

const Node = React.forwardRef(
	({ as: Tag = "div", children, ...props }, ref) => {
		return (
			<Tag ref={ref} {...props}>
				{children}
			</Tag>
		)
	}
)

Node.propTypes = {
	as: oneOfType([string, func, node, object, element]),
	children: node,
}

export default Node
