const assert = require('chai').assert;
const index = require('../index');
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;

describe('Index', function() {
    it('index should return Hello', function() {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should return addition of two numbers which is greater than 5', function() {
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    })

    it('addNumbers should return type number', function() {
        let result = addNumbers(5, 5);
        assert.typeOf(result, 'number');
    });

    it('numberLCM should return LCM of two integers', function() {
        let result = index.numberLCM(4, 8);
        assert.isBelow(result, 10);
    });

    it('numberLCM should return type number', function() {
        let result = index.numberLCM(6, 8);
        assert.typeOf(result, 'number');
    });

    it('concatString should perform concatenation', function() {
        let result = index.concatString('siddhesh ', 'joshi');
        assert.equal(result, 'siddhesh joshi');
    });

    it('concatString should return type string', function() {
        let result = index.concatString("KDU", '22');
        assert.typeOf(result, 'string');
    });
});