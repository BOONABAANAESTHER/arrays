// Define an array
let fruits = ['apple', 'banana', 'orange', 'mango'];

// pop() - Removes the last element from an array and returns that element
let poppedFruit = fruits.pop();
console.log('Popped Fruit:', poppedFruit); // Output: Popped Fruit: mango

// push() - Adds one or more elements to the end of an array and returns the new length of the array
fruits.push('grapes');
console.log('Fruits after push:', fruits); // Output: Fruits after push: ['apple', 'banana', 'orange', 'grapes']

// toString() - Converts an array to a string
let fruitsString = fruits.toString();
console.log('Fruits as string:', fruitsString); // Output: Fruits as string: apple,banana,orange,grapes

// join() - Joins all elements of an array into a string
let joinedFruits = fruits.join(' - ');
console.log('Joined fruits:', joinedFruits); // Output: Joined fruits: apple - banana - orange - grapes

// concat() - Combines two or more arrays
let moreFruits = ['strawberry', 'blueberry'];
let combinedFruits = fruits.concat(moreFruits);
console.log('Combined fruits:', combinedFruits); // Output: Combined fruits: ['apple', 'banana', 'orange', 'grapes', 'strawberry', 'blueberry']

// splice() - Adds or removes elements from an array
let removedElements = combinedFruits.splice(2, 2, 'kiwi', 'pineapple');
console.log('Removed elements:', removedElements); // Output: Removed elements: ['orange', 'grapes']
console.log('Array after splice:', combinedFruits); // Output: Array after splice: ['apple', 'banana', 'kiwi', 'pineapple', 'strawberry', 'blueberry']

// slice() - Extracts a section of an array and returns a new array
let slicedFruits = combinedFruits.slice(1, 4);
console.log('Sliced fruits:', slicedFruits); // Output: Sliced fruits: ['banana', 'kiwi', 'pineapple']

// indexOf() - Returns the first index at which a given element can be found in the array
let orangeIndex = combinedFruits.indexOf('orange');
console.log('Index of orange:', orangeIndex); // Output: Index of orange: -1 (not found)

// lastIndexOf() - Returns the last index at which a given element can be found in the array
let blueberryIndex = combinedFruits.lastIndexOf('blueberry');
console.log('Last index of blueberry:', blueberryIndex); // Output: Last index of blueberry: 5

// forEach() - Executes a provided function once for each array element
combinedFruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

// map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
let mappedFruits = combinedFruits.map(fruit => fruit.toUpperCase());
console.log('Mapped fruits:', mappedFruits); 

// filter() - Creates a new array with all elements that pass the test implemented by the provided function
let filteredFruits = combinedFruits.filter(fruit => fruit.length > 6);
console.log('Filtered fruits:', filteredFruits); 

// reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let totalLength = combinedFruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log('Total length of fruits:', totalLength); 

// some() - Checks if at least one element in the array passes the test implemented by the provided function
let hasLongFruit = combinedFruits.some(fruit => fruit.length > 6);
console.log('Has long fruit:', hasLongFruit); 

// every() - Checks if all elements in the array pass the test implemented by the provided function
let allLongFruits = combinedFruits.every(fruit => fruit.length > 4);
console.log('All long fruits:', allLongFruits); 

// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log('Flat array:', flatArray);

// find() - Returns the first element in the array that satisfies the provided testing function
let foundFruit = combinedFruits.find(fruit => fruit.startsWith('p'));
console.log('Found fruit:', foundFruit); 

// findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = combinedFruits.findIndex(fruit => fruit.startsWith('p'));
console.log('Index of found fruit:', foundIndex); 

// sort() - Sorts the elements of an array in place and returns the sorted array
let sortedFruits = combinedFruits.slice().sort();
console.log('Sorted fruits:', sortedFruits); 
