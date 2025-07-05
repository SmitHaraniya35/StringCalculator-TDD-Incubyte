function add(input) {
    // Check if input is empty string
    if (input === "")
        return 0;

    // Assign default delimiters 
    let delimiter = /[\n,]/;

    if (input.startsWith("//")) {
        const [delimiterPart, numbersPart] = input.split('\n');
        input = numbersPart;

        if (delimiterPart.startsWith('//[') && delimiterPart.endsWith(']')) {
            // Extract custom delimiter with any length, e.g., [***]
            const customDelimiter = delimiterPart.slice(3, -1); // remove '//[' and ']'
            delimiter = new RegExp(escapeRegExp(customDelimiter), 'g');
        } else {
            // Single-character delimiter
            const customDelimiter = delimiterPart.slice(2);
            delimiter = new RegExp(escapeRegExp(customDelimiter));
        }
    }

    return input.split(delimiter).map(Number).reduce((a, b) => a + b, 0);

}

// Helper Functions
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add };
