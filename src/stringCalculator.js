let callCount = 0;

function add(input) {
    callCount++;

    if (input === "") return 0;

    const { delimiter, numbers } = extractDelimiterAndNumbers(input);
    const numArray = numbers.split(delimiter).map(Number);

    validateNoNegatives(numArray);

    return numArray
        .filter(n => !isNaN(n) && n <= 1000)
        .reduce((sum, n) => sum + n, 0);
}

function extractDelimiterAndNumbers(input) {
    let delimiter = /[\n,]/;
    let numbers = input;

    if (input.startsWith("//")) {
        const [delimiterPart, numberPart] = input.split("\n");
        numbers = numberPart;

        if (delimiterPart.includes("[")) {
            // Multiple or multi-length delimiters
            const delimiterMatches = [...delimiterPart.matchAll(/\[([^\]]+)\]/g)];
            const pattern = delimiterMatches
                .map(match => escapeRegExp(match[1]))
                .join("|");
            delimiter = new RegExp(pattern, "g");
        } else {
            // Single delimiter
            const custom = delimiterPart.slice(2);
            delimiter = new RegExp(escapeRegExp(custom));
        }
    }

    return { delimiter, numbers };
}

function validateNoNegatives(numbers) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
}

function getCalledCount() {
    return callCount;
}

function resetCalledCount() {
    callCount = 0;
}

// Helper
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
    add,
    getCalledCount,
    resetCalledCount
};
