// before refactoring the variable is like this
function isFreeDevlieryAvailable(order) {
    const basePrice = order.basePrice
    return basePrice > 1000
}

// after refactoring we want it to be something like this
function isFreeDevlieryAvailable(order) {    
    return order.basePrice > 1000
}

/**
 * Motivation for this refactoring
 *      1. variables are used to give useful names to the expressions but sometimes variables names
 *          doesn't communicate more than the just the expression. these variables names are avoidable.
 *      2. this also helps in using "Extract Method" smoothly
 *  
 * Caveat:
 *      if the useless/obvious looking variable is srtoring some result of the expensive computation
 *      then avoid this refactoring on the cost of performance
 * 
 * Mechanics:
 *      1. the RHS of the assignment should be side effects free.
 *          TODO: need to learn more on the above "Side Effects" part properly.
 *      2. make the variable immutable to be sure that the variable is assigned only once before refactoring.
 *          TODO: search how to achieve this above.
 *      3. if above two are green checks then replace the variable with the expression itself one by one
 *          until it is done.
 */