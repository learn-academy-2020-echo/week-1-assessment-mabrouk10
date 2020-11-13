// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const boilingPoint = (num) => {
//     if(num > 212){
//         return `${num} is above boiling point`
//     } else if (num < 212){
//         return `${num} is below boiling point`
//     } else if (num == 212) {
//         return `${num} is at boiling point`
//     } else {
//         return "something went wrong"
//     }
// }

// console.log(boilingPoint(temp1));
// console.log(boilingPoint(temp2));
// console.log(boilingPoint(temp3));




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]
// var newNumbers = []

// const multiplier = (array) => {
//     for (let index = 0; index < array.length; index++) {
//         newNumbers.push(array[index] * 5)
//     }
//     return newNumbers
// }

// console.log(multiplier(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// var myNumbers2 = [8, -7, 0, 6, 2]
// var newArray = []

// const multiplier = (array) => {
//     newArray = array.map( value => {
//         return value * 5
//     })
//     return newArray
// }

// console.log(multiplier(myNumbers2));


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// var newString = []

// const vowelRemover = (string) => {
//     let = newArray = []
//     newString = string.split("")
//     newArray = newString.filter(value => {
//         return value != 'a' && value != 'e' && value != 'i' && value != 'o' && value != 'u' &&value != 'y'
//     })
//     return newArray.join("")
// }

// console.log(vowelRemover(stringWithVowels1));
// console.log(vowelRemover(stringWithVowels2));



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

// var notAString1 = true
// var notAString2 = 42

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"
// var newString = []
// var stringCheck = ''

// const vowelRemover = (string) => {
//     stringCheck = typeof string

//     if (stringCheck == 'number' || stringCheck == 'boolean' || stringCheck == 'undefined'){
//         return `${string} is not a string`
//     }else {
//     let = newArray = []
//     newString = string.split("")
//     newArray = newString.filter(value => {
//         return value != 'a' && value != 'e' && value != 'i' && value != 'o' && value != 'u' && value != 'y'
//     })
//     }
//     return newArray.join("")
// }

// console.log(vowelRemover(stringWithVowels1));
// console.log(vowelRemover(stringWithVowels2));
// console.log(vowelRemover(notAString1));
// console.log(vowelRemover(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]
// var catsOnly = []

// const findCats = (array) => {
//     catsOnly= array.filter(value => {
//         return value.animal == 'cat'
//     })
//     return catsOnly
// }

// console.log(findCats(toonimals));


//DISREGARD CODE BELOW. MY ANSWER IS ABOVE
//However if any of you had some time why is the solution I am attempting not working in the code below. I would love to know. Thank You!
//***************************************************************************************************************************************************************************************************** */
// var catsOnly = [{name: "", animal: ""}]
// var catName = ''
// var catFound = ''
// // var testCats = [ { name: "hello" } ]
// // testCats[0].name = 'hi'


// const findCats = (array) => {
//     for (let index = 0; index < array.length; index++) {
//         if(toonimals[index].animal == "cat"){
//             // console.log(toonimals[index].name, toonimals[index].animal);

//             catName= toonimals[index].name 
//             catFound = toonimals[index].animal 
//             console.log(catName);
//             console.log(catFound);

//             catsOnly[index].name = catName
//             catsOnly[index].animal = catFound


//             // catsOnly[index] = toonimals[index].name 
//             // catsOnly[index] = toonimals[index].animal 
//             // console.log(catsOnly)
//         }
//         // return catsOnly.join("")
//     }
// }


// console.log(findCats(toonimals));
// // console.log(toonimals[0].name);
// // console.log(testCats[0].name);





// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


// var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }]
// var catsOnly = []

// const findCats = (array) => {
//     catsOnly= array.filter(value => {
//         return value.animal !== 'cat'
//     })
//     for (let index = 0; index < catsOnly.length; index++) {
//         console.log(catsOnly[index].name);
//     }
// }

// console.log(findCats(toonimals));