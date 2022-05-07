/*Exercise 1
Напишите функцию max, которая сравнивает два числа и возвращает большее: 

console.log( max(0, -1) ); // 0*/

function max(a, b) {
    return a > b ? a : b
}
console.log( max(10, 4) )
console.log( max(-1, 4) )
console.log( max(200, -2) )

/*Exercise 2
Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

console.log( min(0, -1, 100, 500, 100500) ); // -1*/

function min(...numbers) {
    let result = numbers.sort((a, b) => a - b)
    let min = result[0]
    return min
}
console.log( min(75, 0, -10, 1000, 500, 100500) )

/*Exercise 3
Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции(методы) массивов:	
	•	Отфильтруйте пользователей младше 18 лет
	•	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
	•	Сформируйте новый массив, который содержит только полное имя пользователей*/

let users = [
    {
        firstname: "Frank",
        lastname: "Smith",
        age: 25,
    },
    {
        firstname: "John",
        lastname: "Doe",
        age: 13,
    },
    {
        firstname: "Micky",
        lastname: "Mouse",
        age: 40,
    },
    {
        firstname: "Pole",
        lastname: "Flint",
        age: 15,
    },
    {
        firstname: "Angelina",
        lastname: "Jolie",
        age: 54,
    },
    {
        firstname: "Kira",
        lastname: "Smith",
        age: 18,
    },
    {
        firstname: "Mira",
        lastname: "Roth",
        age: 31,
    },
    {
        firstname: "Lora",
        lastname: "Hunt",
        age: 70,
    },
    {
        firstname: "Rick",
        lastname: "Pratt",
        age: 35,
    },
]

function usersFilter(users) {
   users.filter(user => user.age >= 18)
   users.forEach(user => {
    return user.fullname = `${user.firstname} ${user.lastname}`
    })
    return result = users
}
console.log(usersFilter(users))

let newUsersArr = users.map(user => user.fullname)
console.log(newUsersArr)

// /*Exercise 4
// Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.
//  */

let arr = [1, 2, 3, 4, 5]
function deleteElem(arr) {
    arr.splice(0, 1)
    return arr
}
console.log(deleteElem(arr))

/*Exercise 5
Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
*/

someArr = [' ' , 2, "Str", 200]
function addingElements(arr, ...elements) {
    return arr.concat(...elements)
}
console.log(addingElements(someArr, "arr", 3, 4, true))

/*Exercise 6
Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}*/

let source = {firstname: 'Tom', age: 10}
let newSource = {}
function extend(obj, ...addingObj) {
    let obj1 = addingObj.reduce((result, obj) => (Object.entries(obj).forEach(([key, value]) => result[key] = value), result), {})
    let result = {...obj, ...obj1}
    return result
}
console.log(extend(source, {firstname: 'John'}, {lastname: 'Doe'}, {gender: "Male"}))

/*Exercise 7
Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
				<имя_автора>, <дата>
				<текст_сообщения>

setComment('2016-11-02', 'Everything is ok', 'John');

John, 2016-12-22
Everything is ok

setComment('2016-11-02', 'You could do it better!');

Anonymous, 2016-12-22
You could do it better!
*/

function setComment(date, message, author = "Anonymous") {
    if(!date || !message) return console.log("Данные введены некорректно")
    console.log(`${author}, ${date}`)
    console.log(`${message}`)
}

setComment('2016-11-02', 'Everything is ok', 'John')
setComment('2016-11-02', 'You could do it better!')