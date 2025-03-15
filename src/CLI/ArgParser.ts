import { parseArgs } from "node:util";
import { ArgParserConfig, ArgParserResult } from "./interfaces";

class ArgParser {
	config: ArgParserConfig;
	constructor(config: ArgParserConfig) {
		this.config = config;
	}

	parse(args: string[]): ArgParserResult {
		if (!args || !args.length)
			throw new Error(
				"No arguments provided. Please specify at least one argument."
			);

		const { values, positionals } = parseArgs({
			args,
			options: this.config.options,
			allowPositionals: true,
		});

		return { values, positionals };
	}
}

export default ArgParser;
