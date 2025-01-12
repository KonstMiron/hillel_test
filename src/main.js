//Домашка 5
function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(reverseString("hello")); // "olleh"
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(findGCD(48, 18)); // 6


//Домашка 6
function doubleLetter(str) {
    return str.split('').map(char => char + char).join('');
}
function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) return str;

    const padding = symbol.repeat(length - str.length);

    return toLeft ? padding + str : str + padding;
}
function camelCase(str, separator = ' ') {
    return str
        .split(separator)
        .map((word, index) => 
            index === 0 
                ? word.toLowerCase() 
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

// Тести

console.log(doubleLetter("hello")); // "hheelllloo"
console.log(padString('Ivan', 6, '*'));         // 'Ivan**'
console.log(padString('Ivan', 6, '*', true));  // '**Ivan'
console.log(padString('Ivan', 3, '*'));        // 'Ivan' (без змін)
console.log(camelCase('hello world', ' '));         // 'helloWorld'
console.log(camelCase('javascript-is-awesome', '-')); // 'javascriptIsAwesome'
console.log(camelCase('make_it_work', '_'));         // 'makeItWork'
