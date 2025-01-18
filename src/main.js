// Homework 7
//Zadanie 1
function reverseArray(array) {
    return array.slice().reverse();
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // [5, 4, 3, 2, 1]
//Zadanie 2
function uniqueValues(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
// Zadanie 3
function calculateAverageGrade(students) {
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    return Math.round((totalGrade / students.length) * 10) / 10;
}
const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
