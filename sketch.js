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

//////////////////////////////////////////////////////////////////////////

//Exercise: Fruit Basket Manager
	//Read from the array
		//log the first fruit
			let fruitBasket = ["apple", "banana", "orange", "pear"];

			console.log(fruitBasket[0]);

		//log the last fruit
			let fruitBasketLength = fruitBasket.length;
			console.log(fruitBasket[fruitBasket.length - 1]);

	//Modify the basket
		//Replace "banana" with "kiwi" (Find banana first)
			let bananaIndex = fruitBasket.indexOf("banana");
				if (bananaIndex !== -1) {
					fruitBasket[bananaIndex] = "kiwi";
				}
			console.log(fruitBasket);

		//Remove the last fruit
			fruitBasket.pop()
			console.log(fruitBasket)
			 
		//Add "mango" to the start of the array
			fruitBasket.unshift("grapes")
			console.log(fruitBasket);

		//Loop through the basket
			for (let i = 0; i < fruitBasket.length; i++) {
				console.log(fruitBasket[i]); 
			}

		//Use a for loop to log every fruit in this format
			for (let fruit of fruitBasket) {
				console.log(fruit); 
			}

	//Search for a fruit
		//Check if "Orange" exists in the basket
			if (fruitBasket.indexOf("orange") == -1 ) {
				console.log("orange not found");
			}	

		//if it exists, log: Orange founda t Index X
			else {console.log(`Orange found at index ${fruitBasket.indexOf("orange")}`)

			}
	

			
function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
