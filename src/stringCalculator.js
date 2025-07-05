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
            const delimiterMatches = [...delimiterPart.matchAll(/\[([^\]]+)\]/g)];
            const delimiters = delimiterMatches
                .map(match => escapeRegExp(match[1]))
                .join('|');
            delimiter = new RegExp(delimiters, 'g');
        } else {
            // Single-character delimiter
            const customDelimiter = delimiterPart.slice(2);
            delimiter = new RegExp(escapeRegExp(customDelimiter));
        }
    }

    const numArray = input.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }


    return input.split(delimiter).map(Number).reduce((a, b) => a + b, 0);

}

// Helper Functions
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add };
