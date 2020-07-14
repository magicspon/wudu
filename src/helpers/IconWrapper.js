import * as React from "react"
import * as T from "prop-types"
import classNames from "classnames"
import Node from "@/helpers/Node"
import useConstant from "@/hooks/useConstant"

const IconWrapper = React.forwardRef(
	({ icon, className, svgClassName, as = "span", label, ...props }, ref) => {
		const svg = useConstant(() =>
			React.createElement(icon, {
				className: classNames(svgClassName, "absolute inset-0 h-full m-auto", {
					"fill-current w-full": !svgClassName,
				}),
				"aria-hidden": true,
			})
		)

		const { width, height, viewBox } = svg.props

		const ratio = useConstant(() => {
			const size = viewBox ? viewBox.split(" ").slice(2) : [width, height]
			return size
				.map((val) => Number(val))
				.reduceRight((y, x) => `${(y / x) * 100}%`)
		})

		return React.useMemo(
			() => (
				<Node
					ref={ref}
					as={as}
					{...props}
					className={classNames(className, "block")}
				>
					<span
						className="relative block w-full h-0"
						style={{ paddingTop: ratio }}
					>
						{svg}
						{label && <span className="sr-only">{label}</span>}
					</span>
				</Node>
			),
			[as, className, label, props, ratio, ref, svg]
		)
	}
)

IconWrapper.propTypes = {
	className: T.string,
	svgClassName: T.string,
	as: T.oneOfType([T.func, T.node, T.element, T.string, T.object]),
	label: T.string,
	icon: T.oneOfType([T.func, T.node, T.element]).isRequired,
}

export default IconWrapper
