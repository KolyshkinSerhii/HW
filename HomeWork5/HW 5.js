/*Exercise 1
Ваша функция принимает два аргумента:
текущий возраст отца (лет)
текущий возраст сына (лет)
Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).*/

let fathersAge = 39
let sonsAge = 20

function multiplyAge(fathersAge, sonsAge) {
    let doubleSonsAge = sonsAge * 2
    let result = fathersAge - doubleSonsAge
    return result >= 0 ? `Отец был вдвое старше сына ${result} назад`: `Отец будет вдвое старше сына через ${Math.abs(result)}`
}

console.log(multiplyAge(fathersAge, sonsAge))

/*Exercise 2
Считайте нечетные числа ниже n​
Если задано число n, вернуть количество положительных нечетных чисел меньше n
Например - задано число 7 - значит функция вернет 1, 3, 5*/

function findOddNumbers(n) {
    let result = []
    for(let i = 1; i < n; i++) {
        if(i % 2 !== 0) {
            result.push(i)
        }
    }
    return result
}

console.log(findOddNumbers(20))

/*Преобразуйте строку в число​
Нам нужна функция, которая может преобразовывать строку в число.
Примечание: не волнуйтесь, все входные данные будут строками, и каждая строка является вполне допустимым представлением целого числа.*/

function ConvertToNum(str) {
    return +str
}
console.log(ConvertToNum('-2'))