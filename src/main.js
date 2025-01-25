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

  // Homework 9
  // Zadanie 1
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function filterPrimes(numberss) {
    return numberss.filter(isPrime);
  }
  
  const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  console.log(filterPrimes(numberss)); // [2, 3, 5, 7, 11]

// Zadanie 2
function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
      const { source, ...rest } = notification;
      if (!acc[source]) {
        acc[source] = [];
      }
      acc[source].push(rest);
      return acc;
    }, {});
  }
  
  const notifications = [
    { source: "email", text: "New message", date: "2025-01-01" },
    { source: "sms", text: "Your code is 1234", date: "2025-01-02" },
    { source: "email", text: "Newsletter", date: "2025-01-03" },
  ];
  
  console.log(groupNotificationsBySource(notifications));
  // {
  //   email: [{ text: "New message", date: "2025-01-01" }, { text: "Newsletter", date: "2025-01-03" }],
  //   sms: [{ text: "Your code is 1234", date: "2025-01-02" }]
  // }

  // Zadanie 3
  function group(array, groupingFunction) {
    return array.reduce((acc, item) => {
      const key = groupingFunction(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }
  
  const data = [6.1, 4.2, 6.3];
  console.log(group(data, Math.floor)); 
  // { 6: [6.1, 6.3], 4: [4.2] }
  
  const wordss = ["one", "two", "three"];
  console.log(group(wordss, word => word.length)); 
  // { 3: ["one", "two"], 5: ["three"] }