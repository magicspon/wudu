import * as T from "prop-types"
import useSWR from "swr"
import IconWrapper from "@/helpers/IconWrapper"

const fetcher = async (icon) =>
	await import(`@/icons/${icon}.svg`)
		.then((icon) => icon.default)
		/* eslint no-console: "off" */
		.catch((err) => console.log(err))

function DynamicIconWrapper({ icon, ...props }) {
	const { data } = useSWR(icon, fetcher)
	return data ? <IconWrapper icon={data} {...props} /> : null
}

DynamicIconWrapper.propTypes = {
	icon: T.string.isRequired,
}

export default DynamicIconWrapper
