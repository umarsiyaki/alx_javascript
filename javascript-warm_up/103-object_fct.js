const myObject = {
  type: 'object',
  value: 12,
  incr: function () {
    this.value++; // Increment the value property
  }
};

console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
