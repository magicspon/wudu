const path = require("path")
const svg = require("./scripts/svg-loader")
const { parsed: env } = require("dotenv").config({
	path: ".env",
})

module.exports = {
	env,
	webpack: (config) => {
		config.module.rules.push(svg(path.resolve(__dirname, "./src/icons/")))

		return config
	},
}
