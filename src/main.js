function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    });
}

sumArrayPromise([1, 2, 3, 4, 5]).then(console.log); 
