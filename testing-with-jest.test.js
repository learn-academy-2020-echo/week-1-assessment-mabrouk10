// ASSESSMENT 1: Testing practical questions

const { TestScheduler } = require("jest")

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
    test("test should add two arguements and return the sum", () => {
        expect(addThemUp(3,2)).toEqual(5)
        expect(addThemUp(11,2)).toEqual(13)
    })
})



// // --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
    return num1 + num2
}



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
    test("function will calculate the area of a triangle by using base times height divided the two", () => {
        expect(triangleArea(3,2)).toEqual(3)
        expect(triangleArea(3,6)).toEqual(9)
    })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.


const triangleArea = (num1, num2) => {
    return (num1*num2)/2
}
