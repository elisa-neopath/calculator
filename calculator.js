const calculator = {
    add: (n1, n2) => n1 + n2,
    sub: (n1, n2) => n1 - n2,
    mul: (n1, n2) => n1 * n2,
    div: (n1, n2) => n1 / n2,
    testPrime: (n) => {
        let i = 3;
        if (n === 1)
            return false;
        if ((n === 2) || (n === 3))
            return true;
        if (n % 2 === 0)
            return false;
        while ((n % i !== 0) && (n / i > n % i))
            i = i + 2;
        if (n % i === 0)
            return false;
        else
            return true;
    }
}
module.exports = calculator;