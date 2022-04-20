//Exercise 1

let a = 3
let b = a * 3
let c = a + b
console.log(a)
console.log(b)
console.log(c)

//Exercise 2

let firstName = prompt("Enter your name", '')
let lastName = prompt("Enter your lastname", '')

console.log(" What's up " + firstName + " " + lastName)

//Exercise 3

let x = +prompt("Enter number", '')
let y = +prompt("Enter number", '')

console.log(x + y)
console.log(x * y)
console.log(x / y)
console.log(x - y)

//Exercise 4

let workdayPerWeek = prompt("How much workdays per week?", '')
let workHourPerDay = prompt("How much work hours per day?", '')
let rate = prompt("Your rate per hour", '')
let wage = workdayPerWeek * 4 * workHourPerDay * rate

console.log(wage)

//Exercise 5

function oddNumber() {
    let number = prompt("Enter a number", '')
    number % 2  === 0 ? console.log("Четное") : console.log("Не четное")
}

oddNumber()

//Exercise 6

function isNumber() {
    let number = prompt("Enter value", '')
    isNaN(number) ? console.log("It is not a number") : console.log("It is a number")
}

isNumber()

//Exercise 7

function compareNumber() {
    let randomNum = Math.round(Math.random() * 100)
    let enteredVal = prompt("Enter a number", '')

    console.log(randomNum)
    console.log(enteredVal)
    randomNum > enteredVal ? console.log("Случайное число больше введеного") : console.log("Случайное число меньше введеного")
}

compareNumber()

//Exersice 8

function findString() {
    let str = prompt("Enter a string", '')
    let interests = prompt('Enter yours interests', '')
    str.includes(interests) ? console.log("true") : console.log("false")
    let newStr = str.slice(0, 21)
    let result = newStr + interests
    console.log(result)
}

findString()