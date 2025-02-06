// Homework 12
// Zad1
function summarize(num) {
  return function(value = 1) {
      return num + value;
  };
}
const addFive = summarize(5);
console.log(addFive(3));
console.log(addFive()); 

// Zad2
function counter(startValue, step) {
  let current = startValue;
  
  function count() {
      current += step;
      return current;
  }
  
  count.increment = function() {
      current += step;
      return current;
  };
  
  count.decrement = function() {
      current -= step;
      return current;
  };
  
  count.reset = function() {
      current = startValue;
      return current;
  };
  
  return count;
}

const myCounter = counter(10, 2);
console.log(myCounter());  
console.log(myCounter.increment()); 
console.log(myCounter.decrement()); 
console.log(myCounter.reset()); 


// Homework 13
// Zad1
function fibonacci(n) {
  if (n < 0) {
      throw new Error("n має бути невід'ємним числом");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(6));
console.log(fibonacci(10)); 

// Zad3
function permute(arr) {
  if (arr.length === 0) return [[]]; 
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      let subPermutations = permute(remaining);

      for (let perm of subPermutations) {
          result.push([current, ...perm]);
      }
  }

  return result;
}

console.log(permute([1, 2, 3]));