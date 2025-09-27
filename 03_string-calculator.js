export function stringCalculator(input) {
    inputAsNumbers = input.split(',').map(Number);
    console.log(typeof inputAsNumbers[0]);
    console.log(inputAsNumbers);
    
    if (input === "") return 0;
    if (inputAsNumbers.length === 1) return inputAsNumbers[0];
    if (inputAsNumbers.length === 2) return inputAsNumbers[0] + inputAsNumbers[1];

}