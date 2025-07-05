function add(input){
    // Check if input is empty string
    if(input === "") 
        return 0;

    // Convert string to int if input string is contain single number
    return parseInt(input);
}

module.exports = { add };
