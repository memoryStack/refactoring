// before refactoring the declaration is like this
function circum(radius) {
    return 2 * Math.PI * radius
}

// after refactoring the declaration is like this
function circumference(radius) {
    return 2 * Math.PI * radius
}

/**
 * Motivation for this refactoring is obvious
 * Usecases scenarios
 *      1. the function is getting called at few places
 *          To achieve this we can simply find the callers location and use the new name instead in one go. some smart
 *          IDEs can automatically this refactoring with very less chances of errors. But automatic refactoring using
 *          the tools might fail if the functions is overloaded or overridden. in that case we have to do this manually.
 *      2. function is getting used widely in the codebase or function is overridden or overloaded then it's very tricky to 
 *          change the name in one go.
 *          "Migration Mechanics" can be used to achieve this refactoring. this mechanics is described below.
 */

// migration mechanics
/**
 * this mechanics is also helpful in making public API functions deprecated. and once the callers have stopped making calls to the
 * deprecated func then we can delete the older func. even if we can't delete the func, we still got the better name
 * for the func in our internal codebase.
 */

// Step 1: Extract the body of older function in the new function
function circum(radius) {

}

function circumference(radius) {
    return 2 * Math.PI * radius
}

// Step 2: Call the new func from older func
function circum(radius) {
    return circumference(radius)
}

function circumference(radius) {
    return 2 * Math.PI * radius
}

// Step 3: replace the "circum" call with "circumference" gradually and test. once all the calls have
//          been replaced then delete "circum" func