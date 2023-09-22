// Using let to declare a function
let incrementAndCall = function (number, theFunction) {
  number++; // Increment the number
  theFunction(number); // Call the function with the incremented number
};

// Example usage:
function printNumber(num) {
  console.log("Number:", num);
}

incrementAndCall(5, printNumber);
