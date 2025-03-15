export interface ArgParserOptions {
	[key: string]: {
		type: "boolean" | "string";
		short?: string;
		multiple?: boolean;
		default?: string | boolean | string[] | boolean[];
	};
}

export interface ArgParserConfig {
	allowPositionals: boolean;
	options: ArgParserOptions;
}

export interface ArgParserResult {
	positionals: string[];
	values: {
		[x: string]: string | boolean | (string | boolean)[] | undefined;
	};
}
