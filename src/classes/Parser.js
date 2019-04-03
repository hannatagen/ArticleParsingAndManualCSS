import Mercury from "@postlight/mercury-parser";

export default class Parser {
    constructor() {
        this.parsedData = null;
    }

    parseUrl(url) {
        Mercury.parse(url)
            .then(result =>
            this.parsedData = result
            );

        return this.parsedData;
    }
}
