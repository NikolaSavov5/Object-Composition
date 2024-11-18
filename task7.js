function sum(a, b, c, d) {
    return a + b + c + d;
}
function partialSum(fixedValue) {
    return function (b, c, d) {
        return sum(fixedValue, b, c, d);
    };
}
const addFive = partialSum(5);
console.log(addFive(1, 2, 3));