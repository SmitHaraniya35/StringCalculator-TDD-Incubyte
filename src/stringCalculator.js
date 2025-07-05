function add(input) {
    // Check if input is empty string
    if (input === "")
        return 0;

    // Assign default delimiters 
    let delimiter = /[\n,]/;

    if (input.startsWith("//")) {
        const [delimiterPart, numbersPart] = input.split('\n');
        const customDelimiter = delimiterPart.slice(2);
        delimiter = new RegExp(customDelimiter);
        input = numbersPart;
    }

    return input.split(delimiter).map(Number).reduce((a, b) => a + b, 0);

}

module.exports = { add };
