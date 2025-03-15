import Lox from "../Lox";
import { ArgParserResult } from "./interfaces";

class CLI {
    private args: ArgParserResult;
	constructor(args: ArgParserResult) {
        this.args = args;
    }

	run() {
        let lox = new Lox();
    }

	private runFile() {}

	private runREPL() {}

	private showUsage() {
		console.log("Usage: tslox script");
		console.log("Options:");
		console.log("  -h, --help\t\tdisplay this help message");
		console.log("  -v, --version\t\tprint the version number");
		console.log("  -r, --repl\t\tstart the REPL");
		console.log(
			"  -f, --file\t\tspecify a file to execute (default if no option is given)"
		);
	}

	private exit(status: number = 1) {
		process.exit(status);
	}
}

export default CLI;
