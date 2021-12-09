const assert = require('chai').assert;
const app = require('../fibonacciApp');

// Returns true if x is perfect square
function isPerfectSquare( x)
{
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
// Returns true if n is a Fibinacci Number, else false
function isFibonacci(n)
{
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return isPerfectSquare(5 * n * n + 4) ||
           isPerfectSquare(5 * n * n - 4);
}

function ValidateSeries(fibonacciSeries){
    fibonacciSeries.forEach(element => {
        if(!isFibonacci (element)){
            return false;
        }
    });
    return true;
}

describe('fibonacciApp', function(){
    describe('Fibonacci Series UnitTests:', function(){
        it('Validate Input Type', function (){
            let result = app.fibonacciSeries('xyz');
            assert.equal(result, 'The input number must be an integer!');
        });

        it('Validate Min Input Value', function (){
            let result = app.fibonacciSeries(-4);
            assert.equal(result, 'The input number must be positive interger!');
        });

        it('Validate Max Input Value', function (){
            let result = app.fibonacciSeries(88);
            assert.equal(result, 'The input number must be less than or equal to 87 to support max int range!');
        });

        it('Validate Array', function (){
            assert.isArray(app.fibonacciSeries(8));
        });

        it('Fibonacci Series', function (){
            let result = app.fibonacciSeries(87);
            assert.equal(ValidateSeries(result), true);
        });
    });
});
