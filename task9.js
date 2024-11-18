function getFibonacci() {
    let a = 0, b = 1;
    return function () {
        const next = a;
        [a, b] = [b, a + b];
        return next;
    };
}
let fibonacci = getFibonacci();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());