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
