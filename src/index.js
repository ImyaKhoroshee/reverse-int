module.exports = function reverse (n) {
    n = Math.abs(n);
    let result = "";
    while (n > 9) {
        result += String(n % 10);
        n = Math.trunc(n / 10);
    }
    result += n;
    return result;
}
