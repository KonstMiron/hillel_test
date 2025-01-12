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
