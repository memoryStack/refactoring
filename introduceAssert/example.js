const assert = require('assert')

function getSquareRoot(num) {
    assert(typeof num === 'number' && num >= 0)
    return Math.sqrt(num)
}

console.log(getSquareRoot(5))
console.log(getSquareRoot(-5)) // assertion will fail and will throw exception

/**
 * Motivation for using assertions
 *      1. sometimes there are assumptions in the code/algorithm. we can communicate the assertions via
 *          comments though. But assertion is a better way of communicating the same thing explicitly in
 *          the code. Anyway reading comments is hard and programmers often skip reading the code.
 *      2. assertions can also be used for finding the errors and debugging purposes but writing the test
 *          cases for code is a better way for debugging pusposes.
 * Note: it's best to use assertions to communicate the assumptions in below code. and it should be done with
 *      keeping in mind that code will work fine even if the assertions are removed later on.
 *
 */