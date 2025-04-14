const arr = [3, 1, 4, 1, 5];

// Immutable sorting
console.log(arr.toSorted()); // [1, 1, 3, 4, 5]
console.log(arr); // [3, 1, 4, 1, 5]

// Immutable reversing
console.log(arr.toReversed()); // [5, 1, 4, 1, 3]
console.log(arr); // [3, 1, 4, 1, 5]

const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]
