export function stringCalculator(input) {
    inputAsNumbers = input.split(',').map(Number);
    console.log(inputAsNumbers);
    
    if (input === "") return 0;
    if (inputAsNumbers.length > 0){
        return inputAsNumbers.reduce((a, b) => a + b, 0);
    }


}