module.exports = {
  fibonacciSeries : function(n){
    if (!Number.isInteger(n)) {
        return 'The input number must be an integer!';
    }
    if (n < 0) {
        return 'The input number must be positive interger!';
    } 
    if (n > 87) {
        return 'The input number must be less than or equal to 87 to support max int range!';
    } 
    else if (n == 0) {
        return [0];
    } else if (n == 1)  {
        return [0, 1];
    } else if (n >= 2)  {
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++){
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        return arr;
    }
  }
}