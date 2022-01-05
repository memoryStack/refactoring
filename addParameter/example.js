const assert = require("assert")
// before refactoring the element is added in the last position
const arr = []
function insertElement(element) {
    arr.push(element)
}

// now requirement is changed and we want this func to insert element at given position
// after refactoring the code will look like below
function insertElement(element, position) {
    assert(position > 0 && position <= arr.length)
    arr.splice(position-1, 0, element)
}

// insertElement2(1)
// insertElement(2)
// console.log(arr)

/**
 * Motivation
 *      as code evolve, we want our function to do more things and to achieve that we need to
 *      add parameters sometimes.
 * Ques: looks like this refactoring has to be done in the one go. is there a way to do it
 *          like other refactorings have ??
 */

// Mechanics
// Step 1: extract the body of func into a new func with a temporary name, because func name before
//          and after adding parameter will be same. and add the ASSERTION as well to be sure if all
//          the funcs are passing the newly added parameter or not.

function insertElement(element) {
    xx_insertElement(element, -1)
}

function xx_insertElement(element, position) {
    assert(typeof position === 'number')
    // ... rest of the body
}

// Step 2: add new parameter into older func and pass it down to new func
function insertElement(element, position) {
    xx_insertElement(element, position)
}

function xx_insertElement(element, position) {
    assert(typeof position === 'number')
    // ... rest of the body
}

// Step 3: receive the "position" parameter from all the callers location
//          and once all the callers are changed then replace the new func name with original func
function insertElement(element, position) {
    assert(typeof position === 'number')
    // ... rest of the body
}