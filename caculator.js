const minus  = require('./minus');
const divide = require('./divide');

class caculator {
    caculate(operator , numberOne , numberTwo ) {
        return operator.operate(numberOne , numberTwo);
    }
}

cclt = new caculator();

console.log(cclt.caculate(new minus() , process.argv[2] , process.argv[3]));
try {
    console.log(cclt.caculate(new divide() , process.argv[2] , process.argv[3]));
} catch (error) {
    console.log(error);
}