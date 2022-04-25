/*Exercise 1
Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.*/

let a = 3
let b = a * 3
let c = a + b
console.log(a)
console.log(b)
console.log(c)

// /*Exercise 2
// Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up John Doe”.
// */

// let firstName = prompt("Enter your name", '')
// let lastName = prompt("Enter your lastname", '')

// console.log(" What's up " + firstName + " " + lastName)

// /*Exercise 3
// Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.*/

// let x = +prompt("Enter number", '')
// let y = +prompt("Enter number", '')

// console.log(x + y)
// console.log(x * y)
// console.log(x / y)
// console.log(x - y)

// /*Exercise 4
// Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.(Просчитывать какой это месяц, 30 или 31 день не нужно).*/


// let workdayPerWeek = prompt("How much workdays per week?", '')
// let workHourPerDay = prompt("How much work hours per day?", '')
// let rate = prompt("Your rate per hour", '')
// let wage = workdayPerWeek * 4 * workHourPerDay * rate

// console.log(wage)

// /*Exercise 5
// Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.
// */

// function oddNumber() {
//     let number = prompt("Enter a number", '')
//     number % 2  === 0 ? console.log("Четное") : console.log("Не четное")
// }

// oddNumber()

// /*Exercise 6
// Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом*/

// function isNumber() {
//     let number = prompt("Enter value", '')
//     isNaN(number) ? console.log("It is not a number") : console.log("It is a number")
// }

// isNumber()

// /*Exercise 7
// Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.
// */

// function compareNumber() {
//     let randomNum = Math.round(Math.random() * 100)
//     let enteredVal = prompt("Enter a number", '')

//     console.log(randomNum)
//     console.log(enteredVal)
//     randomNum > enteredVal ? console.log("Случайное число больше введеного") : console.log("Случайное число меньше введеного")
// }

// compareNumber()

// /*Exersice 8
// Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать. Отобразите результат в модальном окне.*/

// function findString() {
//     let str = prompt("Enter a string", '')
//     let interests = prompt('Enter yours interests', '')
//     str.includes(interests) ? console.log("true") : console.log("false")
//     let newStr = str.slice(0, 21)
//     let result = newStr + interests
//     console.log(result)
// }

// findString()