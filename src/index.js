module.exports = function reverse (n) {
    let i = 0;
    let result = '';
    n = Math.abs(n);
    let str = String(n);
    while (i < str.length) {
        result = str[i] + result;
        i = i+1;
        }
        return Number(result);
  
}
