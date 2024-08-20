function sumOfEvenNumbers(arr) {
    let evenSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        }
    }
    return evenSum;
}

let numbers = prompt("Enter numbers separated by spaces:").split(" ").map(Number);
console.log("Sum of even numbers:", sumOfEvenNumbers(numbers));
