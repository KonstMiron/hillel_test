//Homework 10
//Zad 1
class Notifications {
  constructor(data) {
    this.notifications = data;
  }

  [Symbol.iterator]() {
    const allItems = [];
    for (const key in this.notifications) {
      if (Array.isArray(this.notifications[key])) {
        allItems.push(...this.notifications[key]);
      }
    }
    let index = 0;
    return {
      next: () => {
        if (index < allItems.length) {
          return { value: allItems[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

const data = {
  messages: ["Новий коментар", "Відповідь на ваш пост"],
  alerts: ["Системне оновлення", "Попередження про безпеку"],
  updates: ["Новий розділ у курсі", "Змінено розклад занять"]
};

const notifications = new Notifications(data);

for (const notification of notifications) {
  console.log(notification);
}
//Zad 2
function sqr(x, cache) {
    if (cache.has(x)) {
        return cache.get(x);
    }
    const square = x * x;
    cache.set(x, square);
    return square;
}

const cache = new Map();
console.log(sqr(4, cache));
console.log(sqr(4, cache)); 
console.log(sqr(5, cache)); 
// Homework 11
//Zad 1
function logArguments(fn) {
    return function(...args) {
      console.log("Arguments:", args);
        return fn(...args);
    };
}

function add(a, b) {
    return a + b;
}
const loggedAdd = logArguments(add);
console.log(loggedAdd(3, 5));

function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
};

const loggedGreet = logArguments(greet);
console.log(loggedGreet("Kostiantyn", 20));
//Zad 2
function validate(sum, validator) {
    return function(...args) {
        if (!args.every(validator)) {
            throw new Error("Validation failed: some arguments do not meet the criteria.");
        }
        return sum(...args);
    };
}

function add(a, b) {
    return a + b;
}

const isPositive = (num) => num > 0;
const validatedAdd = validate(add, isPositive);

console.log(validatedAdd(3, 5)); 
console.log(validatedAdd(-1, 5));