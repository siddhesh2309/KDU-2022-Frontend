module.exports = {
    sayHello: function() {
        return 'hello';
    },
    addNumbers: function(value1, value2) {
        return value1+value2;
    },

    numberLCM: function(num1, num2) {
        let min = (num1 > num2) ? num1 : num2;

        while (true) {
            if (min % num1 == 0 && min % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${min}`);
            break;
            }
        min++;
        }

        return min;
    },

    concatString: function(str1, str2) {
        console.log(`The concatenation of ${str1} and ${str2} is ${str1+str2}`);
        return str1+str2;
    }
}