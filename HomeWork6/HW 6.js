/*Exercise 1
1. Получите текущую дату
Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
Пример ввода:
curday('-');
Вывод:
"07-07-2022"
*/

// function currentDate(separator) {
//     let curDay = new Date().getDate()
//     let curMonth = new Date().getMonth()
//     let curYear = new Date().getFullYear()
//     return console.log(`${curDay}${separator}${curMonth}${separator}${curYear}`)
// } или так -->>

function getCurrentDate(separator) {
    return console.log(new Date().getDate() + separator + new Date().getMonth() + separator + new Date().getFullYear())
}

getCurrentDate('-')

/*Exercise 2
Получить название месяца с определенной даты
Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.
Пример ввода:
getMonthName(new Date("10/11/2021"));
Вывод:
"October"
*/

function getMonthName(date) {
    return console.log(date.toLocaleString('default', {month: "long"}))
}
getMonthName(new Date())

/**Exercise 3
 * Сравнение двух дат
Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
Пример ввода:
compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00'));
Вывод:
"Date1 > Date2"
 */

function compareDates(date1, date2) {
    return date1.getTime() > date2.getTime() ? "Date1 > Date2" : "Date1 < Date2" 
}

console.log(compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:02')))

/**Exercise 4
 * Проверьте, является ли дата выходным днем
Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
Пример ввода:
checkIsWeekend('Nov 16, 2020');
Вывод:
"не выходной"
 */

function checkIsWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6 ? "Its weekend!!!" : "It is not weekend"
}

console.log(checkIsWeekend(new Date('7/11/2022')))
console.log(checkIsWeekend(new Date('7/8/2022')))
console.log(checkIsWeekend(new Date('7/9/2022')))
console.log(checkIsWeekend(new Date('7/10/2022')))