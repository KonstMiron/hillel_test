function isPrime(number) {
    if (number <= 1) {
        console.log(`Число ${number} не є простим числом.`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`Число ${number} не є простим числом.`);
            return;
        }
    }
    console.log(`Число ${number} є простим числом.`);
}
isPrime(2);  // Виведе "Число 2 є простим числом."
isPrime(4);  // Виведе "Число 4 не є простим числом."
isPrime(17); // Виведе "Число 17 є простим числом."
isPrime(1);  // Виведе "Число 1 не є простим числом."

function findPerfectNumbers(n) {
    for (let num = 1; num <= n; num++) {
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        if (sum === num) {
            console.log(`Число ${num} є досконалим числом.`);
        }
    }
}
findPerfectNumbers(10000); // Виведе всі досконалі числа в діапазоні до 10 000

function drawTree(height) {
    let tree = '';
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        tree += spaces + stars + '\n';
    }
    console.log(tree);
}
drawTree(4);
// Виведе:
//    *
//   ***
//  *****
// *******
