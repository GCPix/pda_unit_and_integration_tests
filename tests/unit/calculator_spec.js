var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."


  it('should add 1 to 4 and get 5', function (){
     calculator.previousTotal = 1;
     calculator.add(4);
     assert.strictEqual(calculator.runningTotal, 5);
   })

  it('It should allow you to correctly show 7-4=3', function(){
    calculator.previousTotal = 7;
    // let total = calculator.numberClick(7)
    total = calculator.subtract(4)

    assert.strictEqual(calculator.runningTotal, 3)
  })
  it('It should allow you to correctly show 3*5=15', function(){

    calculator.previousTotal = 3;
    total = calculator.multiply(5)

    assert.strictEqual(15, calculator.runningTotal)
  })
  it('It should allow you to correctly show 21/7=3', function(){

    calculator.previousTotal = 21;
    total = calculator.divide(7)

    assert.strictEqual(3, calculator.runningTotal)
  })
  it('It should allow you to correctly show 101 without returning to 0', function(){

  calculator.numberClick(1)
  calculator.numberClick(0)
  calculator.numberClick(1)

    assert.strictEqual(101, calculator.runningTotal)
  })
  it('It should allow you to correctly show 1+5-2*5/2=1', function(){

    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')

    assert.strictEqual(calculator.runningTotal, 1)
  })
  it('It should allow you to clear the running total', function(){

    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0)
  })
});
