// Using let to declare a function
let executeXTimes = function (x, theFunction) {
  for (let i = 0; i < x; i++) {
    theFunction();
  }
};

// Example usage:
function printHello() {
  console.log("Hello!");
}

executeXTimes(5, printHello);
