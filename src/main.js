// Homework 8
//Zadanie 1
function capitalizeStrings(strings) {
    return strings.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  }
  
  const words = ["apple", "banaNA", "kiWi", "ORANGE"];
  console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
//Zadanie 2
function findCommonElements(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  
  console.log(findCommonElements(array1, array2)); // [3, 4, 5]
// Zadanie 3
function analyzeArray(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return {
      sum,
      average,
      min,
      max
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }