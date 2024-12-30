function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
fizzBuzz(15); // Виведе "FizzBuzz"
fizzBuzz(9);  // Виведе "Fizz"
fizzBuzz(10); // Виведе "Buzz"
fizzBuzz(7);  // Виведе 7

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} є високосним роком.`);
    } else {
        console.log(`${year} не є високосним роком.`);
    }
}
isLeapYear(2024); // Виведе "2024 є високосним роком."
isLeapYear(1900); // Виведе "1900 не є високосним роком."
isLeapYear(2000); // Виведе "2000 є високосним роком."


function printYearsMessage(age) {
    if (age % 10 === 1 && age % 100 !== 11) {
        console.log(`Вам ${age} рік`);
    } else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
        console.log(`Вам ${age} роки`);
    } else {
        console.log(`Вам ${age} років`);
    }
}
printYearsMessage(1);   // Виведе "Вам 1 рік"
printYearsMessage(23);  // Виведе "Вам 23 роки"
printYearsMessage(45);  // Виведе "Вам 45 років"
printYearsMessage(111); // Виведе "Вам 111 років"
