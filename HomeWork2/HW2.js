//Exercise 1
/*В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.*/

let x = +prompt("Enter a number", '')
    if (x > 0) {
        console.log("Число положительное")
    } else if (x == 0) {
        console.log("Число равно нулю")
    } else if (x < 0) {
        console.log("Число отрицательное")
    }

//Exercise 2
//Создайте три переменные с любыми числовыми значениями. Используя условный оператор  и не используя логические, найдите минимальное число и отобразите на экране имя переменной и ее значение.

let num1 = 30
let num2 = 40
let num3 = 50
let min = num1 < num2 ? num1 : num2
let minResult = min < num3 ? min : num3
let max = num1 > num2 ? num1 : num2
let maxResult = max > num3 ? max : num3
console.log(minResult)
console.log(maxResult)

//Exercise 3
//У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.

let myPocket = +prompt("How much money do you have?")
let myFriendPocket = +prompt("How much money does he have?")
let budget = myPocket + myFriendPocket
let needForMajorca = 2000
let needForBeerParty = 100
budget <= needForMajorca ? console.log("We will buy a beer") : console.log("We are going to Majorca")


//Exercise 4
//В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Вислати повiстку”.

let age = +prompt("How old are you?", "")
age >= 20 && age <= 27 ? console.log("Выслать повестку") : false

//Exercise 5
//Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.

let bus = +prompt("Bus number", "")
bus == 7 || bus == 225 || bus == 255 ? console.log("We going home") : console.log("We waiting for next bus")

//Exercise 6
//В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сообщение о необходимости идти на работу.

let day = new Date().getDay()
day != 0 && date != 6 ? console.log("Go to work") : console.log("Stay at home")


//Exercise 7
//Запросите из prompt переменные x и y значения от -20 до 20. Если переменная x равна или меньше 1, а переменная y больше или равна 3 или меньше 0, то выведите сумму этих переменных, иначе выведите 'Неверно!'.

let numA = +prompt("Enter number from -20 to 20")
let numB = +prompt("Enter number from -20 to 20")
numA <= 1 && numB >= 3 || numB <= 0 ? console.log(numB + numA) : console.log("Неверно")

//Exercise 8
//Если переменная x больше 2 и меньше 11, или переменная y больше или равна 6 и меньше 14, то увеличьте x на 2, иначе прибавьте к x число 5. Выведите новое значение переменной на экран.

let numX = 3
let numY = 15
let result = numX >2 && numX < 11 && numY >= 6 && numY < 14 ? numX * 2 : numX + 5
console.log(result)

//Exercise 9
//Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.

if (confirm("You must enter your name")) {
    let name = prompt("Enter you name", '')
    !name ? console.log('Hello, Guest') : console.log("Hello, " + name)
}

//Exercise 10
//Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: ‘ua’, 'en', 'de' (например, из prompt). Если она имеет значение ‘ua’, то в переменную greeting запишите приветствие на украинском, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.

// let greeting = ''
// let lang = prompt('Choose languege', '')
// switch(lang) {
//     case 'ua':
//         greeting = 'Привiт'
//         break
//     case 'en':
//         greeting = "Hello"
//         break
//     case 'de':
//         greeting = ("Hallo")
//         break
//     default:
//         greeting = "Привет"
// }
// console.log(greeting)

let greeting = ''
let lang = prompt('Choose languege', '')
if(lang === "ua") {
    greeting = "Привiт"
} else if (lang === "en") {
    greeting = "Hello"
} else if (lang === "de") {
    greeting = "Hallo"
}
console.log(greeting)

//Loops
//Exercise 1
//Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for

let str = ''
for(; str.length < 10; i++) {
    str += ".#"
}
console.log(str)

//Exercise 2
/*Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. Программа поздравляет того, чье имя определяется в переменной username:
Happy birthday to you
Happy birthday to you
Happy birthday dear {{username}}
Happy birthday to you*/

let username = "Serhii"
let i = 0
while(i < 4) {
    i != 2 ? console.log("Happy birthday to you") : console.log("Happy birthday to you " + username)
    i++
}

//Exercise 3
//Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.

while(confirm("Ready?") != true) {
    confirm("Ready?")
}

//Exercise 4
//В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, введенного пользователем. Результат отобразите в окне alert.

let num = +prompt("Enter a number")
let sum = 0
for( let i = 0; i <= num; i++) {
    if(i % 2 != 0) {
        sum += i
    }
}
console.log(sum)

//Exercise 5
//Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

let count = 0
let randomNum = 0
for(let i = 0; ; i++) {
    randomNum = Math.random()
    count++
    if(randomNum > 0.9) break
}
console.log(count)
console.log(randomNum)


//Exercise 6
//Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 

for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(i * j)
    }
}

//Exercise 7
//С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13...  - (выполнять по желанию)

//Чуть голову не сломал
let a = 0
let b = 1
let c
for(; a <= 50; (c = a + b) && (a++) && (a = b) && ( b = c)) {
    console.log(a) 
} 

//Exercise 8
//Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество введенных чисел, их общую сумму.

let summary = 0
let counter = 0
let enteredNum = +prompt("num", "")
while(enteredNum != false) {
    summary += enteredNum
    enteredNum = +prompt("num", "")
    counter++
}
console.log(counter++)
console.log(summary)

//Exercise 9
//Напишите проверку пароля, введенного пользователем (заведомо определите пароль). Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля

let password = 1234
let passField = +prompt("Enter password", "")
while(passField !== password ) {
    passField = +prompt("Enter password", "")
    if(passField === password) {
        console.log("Вы успешно авторизованы")
    }
}

//Exercise 10
/*Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
- если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
- если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»;*/

for(let i = 1; i <= 50; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
    } else if(i % 3 == 0) {
        console.log("Fizz")
    } else if(i % 5 == 0) {
        console.log("Buzz")
    } else console.log(i)
}
