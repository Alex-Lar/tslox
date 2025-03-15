import { CLI, ArgParser, argParserConfig as config } from "./CLI";

const main = () => {
	try {
		const parsedData = new ArgParser(config).parse(process.argv.slice(2));
		new CLI(parsedData).run();	
	} catch(err) {
		console.error("An error occurred:", err);
	}
}
main();

