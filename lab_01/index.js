const print1_10 = () => {
    for (let i = 1; i <= 10; i++) {
        document.write(i + " ");
    }
};
const printNumberLessThan_100 = () => {
    for (let i = 1; i < 100; i++) {
        document.write(i + " ");
    }
};

const mulWith7 = () => {
    for (let i = 1; i <= 10; i++) {
        document.write(i * 7 + " ");
    }
};

const printMulTable = () => {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            document.write(i * j + " ");
        }
        document.write("<br>");
    }
};

const sum1_10 = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.write(sum);
};

const calc10_giaiThua = () => {
    let result = 1;
    for (let i = 1; i <= 10; i++) {
        result *= i;
    }
    document.write(result);
};

const sumOfEvenNumberGt10_Lt30 = () => {
    sum = 0;
    for (let i = 12; i < 30; i += 2) {
        sum += i;
    }
    document.write(sum);
};

const celsiusToFahrenheit = (celsius) => {
    document.write((celsius * 9) / 5 + 32);
};

const fahrenheitToCelsius = (fahrenheit) => {
    document.write(((fahrenheit - 32) * 5) / 9);
};

const sumArray = (numbers) => {
    document.write(
        numbers.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
    );
};

const averageArray = (numbers) => {
    const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    document.write(sum / numbers.length);
};

const getPositiveNumbers = (numbers) => {
    document.write(numbers.filter((number) => number > 0));
};

//Find the maximum number in an array of numbersFind the maximum number in an array of numbers
function findMaxNumber(arr) {
    return Math.max(...arr);
}

//Print the first 10 Fibonacci numbers without recursion javascript
function printFirst10Fibonacci() {
    let a = 0,
        b = 1;
    for (let i = 0; i < 10; i++) {
        document.write(a);
        [a, b] = [b, a + b];
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function sumOfDigits(num) {
    return num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

function printFirst100Primes() {
    let count = 0;
    let num = 2;
    while (count < 100) {
        if (isPrime(num)) {
            document.write(num);
            count++;
        }
        num++;
    }
}

function primesGreaterThanN(n, p) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

function rotateLeft(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
function rotateRight(arr) {
    if (arr.length === 0) return arr;
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}
function reverseArray(arr) {
    return arr.reverse();
}
function reverseString(str) {
    return str.split("").reverse().join("");
}
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
function symmetricDifference(arr1, arr2) {
    return arr1
        .filter((item) => !arr2.includes(item))
        .concat(arr2.filter((item) => !arr1.includes(item)));
}

function difference(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
}
function getDistinctElements(arr) {
    return [...new Set(arr)];
}

function isPrimes(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getFirst100Primes() {
    const primes = [];
    let num = 2; // Start checking from 2 (the first prime)
    
    while (primes.length < 100) {
        if (isPrimes(num)) {
            primes.push(num);
        }
        num++;
    }
    
    return primes;
}

function sumOfPrimes(primes) {
    return primes.reduce((sum, prime) => sum + prime, 0);
}

function printPrimeDistances(primes) {
    for (let i = 1; i < primes.length; i++) {
        const distance = primes[i] - primes[i - 1];
        console.log(`Distance between ${primes[i - 1]} and ${primes[i]}: ${distance}`);
    }
}
function countWords(text) {
    // Use a regular expression to match words (considering word boundaries)
    const words = text.trim().match(/\b\w+\b/g);
    return words ? words.length : 0;
}

function capitalizeWords(text) {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

function sumFromCommaDelimitedString(str) {
    const numbers = str.split(',').map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
}
function getWords(text) {
    return text.trim().match(/\b\w+\b/g) || [];
}

function csvToArray(csvText) {
    return csvText.split('\n').map(row => row.split(','));
}

function stringToCharArray(str) {
    return str.split('');
}
function stringToAsciiArray(str) {
    return str.split('').map(char => char.charCodeAt(0));
}

function asciiArrayToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        let code = char.charCodeAt(0);
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; // Non-alphabet characters remain the same
    }).join('');
}
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function circlesIntersect(x1, y1, r1, x2, y2, r2) {
    const dist = distance(x1, y1, x2, y2);
    return dist <= (r1 + r2);
}

function extractColumn(matrix, columnIndex) {
    return matrix.map(row => row[columnIndex]);
}
function binaryToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
}
function sumJaggedArray(arr) {
    return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}

function maxInJaggedArray(arr) {
    return Math.max(...arr.flat(Infinity));
}
function deepCopyJaggedArray(arr) {
    return JSON.parse(JSON.stringify(arr));
}
function longestWord(str) {
    const words = getWords(str);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
    return arr;
}
function uniqueRandomNumbers(n) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(arr);
}