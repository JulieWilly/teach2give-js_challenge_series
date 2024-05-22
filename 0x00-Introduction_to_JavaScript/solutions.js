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

function isSumMoreThan100(val1, val2) {
    let sum = val1 + val2;

    if (sum > 100) {
        return true;
    } else {
        return false
    }
}

//let check_sum = isSumMoreThan100(72, 38)

// #9 convert minutes to second.
// function convertToSeconds(minutes) {
//     // 1 min = 60s
//     let convert_to_seconds = minutes * 60
//     if (convert_to_seconds === 0) {
//         return 0;
//     } else if(convert_to_seconds === 1 ) {
//         return `${convert_to_seconds} second`
//     } else {
//         return `${convert_to_seconds} seconds`
//     }

// }

// let check = convertToSeconds(0.239020923)
// console.log(check)

// #10 Greater among three.
// function greater(value1, value2, value3) {
//     if (value1 > value2 && value1 > value3){
//         return value1
//     } else if (value2 > value1 && value2 > value3) {
//         return value2
//     } else if (value1 === value2 & value2 == value3){
//         return value3
//     } else {
//         return value3
//     }
// }

// let test = greater(4, 45, 3)
// console.log(test)


// #11 Lease of three.
// function least(input1, input2, input3){
//     if (input1 > input2 && input2 < input3) {
//         return input2
//     } else if (input2 > input3 && input3 < input1){
//         return input3
//     } else if(input1 === input2 && input2 === input3) {
//         return input3
//     } else {
//         return `${input1} is less`
//     }
// }

// let checker = least(2, 35, 9)
// console.log(checker)

// # 12 Footeball points.
// function footballPoints(no_of_games_won, no_of_games_drawn, no_of_games_lost){
//     let totalGamesWon = no_of_games_won *= 3
//     let totalGamesDrawn = no_of_games_drawn *= 1

//     let totalScores = no_of_games_won +no_of_games_drawn
//     return totalScores

// }

// let checkGoals = footballPoints(5,2,0)
// console.log(checkGoals)


// #13 Even numbers
function isEven (number) {
     
    for(let a = 0; number <= 101; a++) {
        // console.log(number)
        if(number % 2 != 0) {
            return false 
        }else {
            console.log(number)
            return true
        }
    }
}

let evenNumber = isEven(99)
console.log(evenNumber)