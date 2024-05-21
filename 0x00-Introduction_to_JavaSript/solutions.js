// # 1 Sum of two numbers
function sumOfTwoNumbers(var1, var2) {
    // let result = var1 + var2;
    return var1 + var2
}

// let var1 = parseInt(prompt("Please enter your first number here......"));
// let var2 = parseInt(prompt("Please enter your second number here...."));

// let output = sumOfTwoNumbers(var1, var2)

// console.log(output)

// #2. Return the next number from the number passed

// let incrementNumber = parseInt(prompt("Please enter the number to increment here ....."));
function nextNumber(increment) {
    return increment += 1
}

// let result = nextNumber(incrementNumber)

// console.log(result)

// #3. Find perimeter of a rectangle

// let width = parseInt(prompt("Please enter the width of the rectangle....."))
// let height = parseInt(prompt("Please enter the height of the rectangle....."))

function perimeter(width,  height) {
    let rectPerimeter = (width + height) * 2
    return rectPerimeter;
}

// let rectanglePerimeter = perimeter(width, height)
//console.log(rectanglePerimeter)


// #4 Return something to me

// let stringInput = prompt("Please enter your message here to be returned.")
// function returnSomethingToMe( stringInput) {
//     return `something ${stringInput}`;
// }

// let stringOutput = returnSomethingToMe(stringInput)
// console.log(stringOutput)


// #5 Bob's BMI vs Jane's BMI

// let bobBMI = parseFloat(prompt("Bob, please enter you BMI value.."))
// let janeBMI = parseFloat(prompt("Jane, Please enter your BMI value.."))

function greaterBMI(bobBMI, janeBMI) {
    if ( bobBMI > janeBMI) {
        return "Bob"
    } else if (janeBMI > bobBMI){
        return "Jane";
    } else if (bobBMI === janeBMI) {
        return "Equal"
    } else {
        alert("Please provide valid inputs.")
    }
}

// let difference = greaterBMI(bobBMI, janeBMI)
// console.log(difference)

// #6 Basketball points

// let number_of_two_pointers = parseInt(prompt("Please enter the number of two pointers balls...."))
// let number_of_three_pointer = parseInt(prompt("Please enter number of three pointer balls."))
function basketBallPoints(twoPointers, threePointers) {
    let pointsResult = (twoPointers * 2) + (threePointers * 3)
    return pointsResult;
}

// let pointsValue = basketBallPoints(number_of_two_pointers, number_of_three_pointer)
// console.log(pointsValue)


// #8 is sum less than 100