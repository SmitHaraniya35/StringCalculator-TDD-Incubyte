function add(input){
    // Check if input is empty string
    if(input === "") 
        return 0;

    // Handling default delimiters and split input on it
    const defaultDelimiters = /[\n,]/;
    return input.split(defaultDelimiters).map(Number).reduce((a, b) => a + b, 0);

}

module.exports = { add };
