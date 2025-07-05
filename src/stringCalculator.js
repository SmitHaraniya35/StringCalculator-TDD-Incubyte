function add(input){
    // Check if input is empty string
    if(input === "") 
        return 0;

    // Handling single number or multiple comma-separated numbers
    return input.split(',').map(Number).reduce((sum, num) => sum + num, 0);

}

module.exports = { add };
