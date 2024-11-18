function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}
function compose(f, g) {
    return function (x) {
        return g(f(x));
    };
}
const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3));