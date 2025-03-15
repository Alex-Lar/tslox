import { ArgParserConfig, ArgParserOptions } from "./interfaces";

const argParserConfig = {
	allowPositionals: true,
	options: {
		help: {
			type: "boolean",
			short: "h",
			multiple: false,
			default: false,
		},
		version: {
			type: "boolean",
			short: "v",
			multiple: false,
			default: false,
		},
		repl: {
			type: "boolean",
			short: "r",
			multiple: false,
			default: false,
		},
		file: {
			type: "string",
			short: "f",
			multiple: false,
			default: "",
		},
	} as ArgParserOptions,
} as ArgParserConfig;

export default argParserConfig;
