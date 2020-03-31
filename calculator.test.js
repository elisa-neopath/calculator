const calculator = require('./calculator');

//add
test.each([
    [1, 2, 3],
    [0, 0, 0],
    [-2, -2, -4],
    [100000000, 10000000, 110000000],
    [-10000000, -1000000 , -11000000]
])('soma %f + %f para dar %f', (n1, n2, res) => {
    expect(calculator.add(n1, n2)).toBe(res);
});

//sub
test.each([
    [2, 1, 1],
    [0, 0, 0],
    [-2, -2, 0],
    [100000000, 10000000, 90000000],
    [-10000000, -1000000 , -9000000]
])('calcula %f - %f para dar %f', (n1, n2, res) => {
    expect(calculator.sub(n1, n2)).toBe(res);
});

//mul
test.each([
    [1, 2, 2],
    [0, 1, 0],
    [-2, -2, 4],
    [1, -2, -2],
    [100000000, 10000000, 1000000000000000],
    [-10000000, -1000000 , 10000000000000]
])('multiplica %f * %f para dar %f', (n1, n2, res) => {
    expect(calculator.mul(n1, n2)).toBe(res);
});

//div
test.each([
    [1, 2, 0.5],
    [0, 1, 0],
    [-2, -2, 1],
    [1.0, -2.0, -0.5],
    [100000000, 10000000, 10],
    [-10000000, -1000000 , 10]
])('divide %f / %f para dar %f', (n1, n2, res) => {
    expect(calculator.div(n1, n2)).toBeCloseTo(res);
});

//testPrime
test.each`
    n       | res
    ${1}    | ${false}
    ${2}    | ${true}
    ${3}    | ${true}
    ${4}    | ${false}
    ${5}    | ${true}
    ${6}    | ${false}
    ${7}    | ${true}
    ${147}  | ${false}
    ${149}  | ${true}
`('testa se $n e primo e devolve $res', ({n, res}) => {
    expect(calculator.testPrime(n)).toBe(res);
});