// before refactoring
function price(order) {
    // price is base price - quantity discount + shipping
    return order.quantity * order.itemPrice
    - Math.max(0, order.quantity - 500) * (order.itemPrice * 0.05)
    + Math.min(order.quantity * order.itemPrice * 0.01, 100)
}

// after refactoring
function price(order) {
    // price is base price - quantity discount + shipping
    const basePrice = order.quantity * order.itemPrice
    const discount = Math.max(0, order.quantity - 500) * (order.itemPrice * 0.05)
    const shippingCharges = Math.min(basePrice * 0.01, 100)
    return basePrice - discount + shippingCharges
}

/**
 * Motivation:
 *      Sometimes expressions become very complex to understand. in these situations breaking up the
 *      expression into variables (with meaningful names) will be helpful in understanding the code to
 *      other contributors as well.
 * Scenariois:
 *      first we need to look at the context in which variable will be extracted.
 *          1. if the context is local to the func then a simple variable name is enough locally.
 *          2. if the context is broader in which variable will be used then it's better to extract the
 *              variable in a new function.
 * Mechanics:
 *      Step1: check that the expression have side effects or not.
 *      Step2: declare an immutable variable and set it the result of the expression.
 *      Step3: replace the expression everywhere with the variable.
 *      Step4: test.
 *      Step5: repeat from Step1 if we want to extract more expressions.
 */
