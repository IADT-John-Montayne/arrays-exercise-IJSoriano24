//This is how you change an element in an array if you know the index value
let names = ["Alice", "Bob", "Charlie"];

console .log(names); 

names[1] = "David";

console.log(names);

console.log(names.length); // This will log the length of the array

names.push("Eve"); // This will add a new element to the end of the array

console .log(names);

console.log(names.length);

names.unshift("Millie") // This will add a new element to the beginning of the array

console .log(names);

names.pop(); // This will remove the last element from the array

console .log(names);

// //this is how you loop through an array
// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Millie"];

// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i]); // This will log each name in the array
// }

// This will log each name in the array
// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Millie"];

// for (let name of names) {
// 	console.log(name); 
// }

// This is how you use the slice() method to create a new array from an existing array
let people = ["Alice", "Bob", "Charlie", "David", "Eve", "Millie"];

let party = people.slice(1, 5); // This will create a new array with elements from index 1 to 3

console.log(party);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
