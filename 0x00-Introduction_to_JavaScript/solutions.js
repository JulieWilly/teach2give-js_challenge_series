// # 1 Sum of two numbers
function sumOfTwoNumbers(var1, var2) {
    return var1 + var2
}

let output = sumOfTwoNumbers(3, 2)
console.log('Sum of two numbers' + output)

// #2. Return the next number from the number passed

// let incrementNumber = parseInt(prompt("Please enter the number to increment here ....."));
function nextNumber(increment) {
    return increment += 1
}
let result = nextNumber(12)
console.log("next number is " + result)

// #3. Find perimeter of a rectangle
function perimeter(width,  height) {
    let rectPerimeter = (width + height) * 2
    return rectPerimeter;
}

let rectanglePerimeter = perimeter(20,48)
console.log("Perimeter of a rectangle " + rectanglePerimeter)


// #4 Return something to me

function returnSomethingToMe( stringInput) {
    return `something ${stringInput}`;
}
 let stringOutput = returnSomethingToMe("is better that nothing")
    console.log(stringOutput)


// #5 Bob's BMI vs Jane's BMI
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

let difference = greaterBMI(35 ,35)
console.log(difference)

// #6 Basketball points
function basketBallPoints(twoPointers, threePointers) {
    let pointsResult = (twoPointers * 2) + (threePointers * 3)
    return pointsResult;
}

let pointsValue = basketBallPoints(7, 5)
console.log(pointsValue)


// #8 is sum less than 100

function isSumMoreThan100(val1, val2) {
    let sum = val1 + val2;

    if (sum > 100) {
        return true;
    } else {
        return false
    }
}

let check_sum = isSumMoreThan100(72, 38)
console.log("sum -> " + check_sum)

// #9 convert minutes to second.
function convertToSeconds(minutes) {
    // 1 min = 60s
    let convert_to_seconds = minutes * 60
    if (convert_to_seconds === 0) {
        return 0;
    } else if(convert_to_seconds === 1 ) {
        return `${convert_to_seconds} second`
    } else {
        return `${convert_to_seconds} seconds`
    }

}

let check = convertToSeconds(0.016)
console.log(check)

// #10 Greater among three.
function greater(value1, value2, value3) {
    if(value1 == value2 && value2 == value3){
        return `Equal`
    } else if (value1 >= value2 && value1 >= value3) {
        return value1
    } else if (value2 >= value1 && value2 >= value3) {
        return value2
    } else {
        return value3
    }
}

let test = greater(5, 3, 4)
console.log("Greatest of the three -> " + test)


// #11 Least of three.
function least(input1, input2, input3){
    if (input1 > input2 && input2 < input3) {
        return input2
    } else if (input2 > input3 && input3 < input1){
        return input3
    } else if(input1 === input2 && input2 === input3) {
        return input3
    } else {
        return `${input1} is less`
    }
}

let checker = least(53, 5, 53)
console.log("Least of the three " + checker)

// # 12 Footeball points.
function footballPoints(no_of_games_won, no_of_games_drawn, no_of_games_lost){
    // let totalGamesWon = no_of_games_won *= 3
    // let totalGamesDrawn = no_of_games_drawn *= 1

    // let totalScores = no_of_games_won +no_of_games_drawn
    return (no_of_games_won * 3) + (no_of_games_drawn * 1) + (no_of_games_lost * 0);
}

let checkGoals = footballPoints(5,2,0)
console.log(checkGoals)


// #13 Even numbers
function isEven (number) {
     
    for(let a = 0; number <= 101; a++) {
        if(number % 2 != 0) {
            return false 
        }else {
            console.log(number)
            return true
        }
    }
}

for(let a = 0; a <= 100; a++) {
    if(isEven(a)) {
        console.log(a)
    }

}
let evenNumber = isEven(100)
console.log(evenNumber)