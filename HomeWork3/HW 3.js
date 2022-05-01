//Exercise 1
//Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let mixedArr = [1, 2, 3, "a", "b", "c", "4", "5", "6"]
let result = mixedArr.filter(el => Number(el)).reduce((sum, elem) => sum + +elem, 0)
console.log(result)

//Exercise 2
/*Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
	•	Добавьте в начало массива значение ‘Backbone.js’
	•	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
	•	Добавьте в массив значение ‘CommonJS’ вторым элементом
	•	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/

let arrStr = ["Angular", "jQuery"]
arrStr.unshift("Backbine.js")
arrStr.push("React.js", "Vue.js")
arrStr.splice(1, 0, "Common.js")
for(let i = 0; i <= arrStr.length; i++) {
    if(arrStr[i] === "jQuery") {
        console.log("Это здесь лишнее " + arrStr[i])
        arrStr.splice(3,1)
    }
}
console.log(arrStr)

//Exercise 3
//Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = "Как однажды Жак звонарь сломал фонарь головой"
let resultStr =  str.split(" ")
let words = resultStr.splice(2, 2)
let word1 = resultStr.splice(3, 1)
resultStr.splice(1, 0, words[0], words[1])
resultStr.splice(6, 0, word1[0])
console.log(resultStr.join(" "))

//Exercise 4
//Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
    name: "John",
    surname: "Doe",
    age: 30,
    job: "developer"
}
let keys = prompt("Введите имя поля")
if (keys in person) {
    console.log(keys, person[keys])
} else {
    person[keys] = prompt("Введите значение")
}
console.log(person)

//Exercise 5
//Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phone = {
    brand: prompt("Enter brand"),
    model: prompt("Enter model"),
    color: prompt("Enter color"),
}
person.phone = phone

//Exercise 6
//Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let emptyArr = []
for(let i = 0; i <= 5; i++) {
    let val = prompt('Введитезначение', '')
    emptyArr.push(val)
}
console.log(emptyArr)
let sum =  emptyArr.filter(el => Number(el)).reduce((sum, elem) => sum + +elem, 0)
console.log(sum)

//Exercise 7
//Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения - (задача со звездочкой)

let array = []
for(let i = 0; i <= 9; i++) {
    array[i] = []
    for(let j = 1; j <= 10; j++) {
        let value = i * j
        array[i].push(value)
    }
}
array.shift(0)
console.log(array)