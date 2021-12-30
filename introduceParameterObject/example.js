
// before refactoring
const isValidCell = (row, col) => {
    return !(row < 0 || row > 9 || col < 0 || col > 9)
}
isValidCell(1, 2)

// after refactoring
const isValidCell = (cell) => {
    return !(cell.row < 0 || cell.row > 9 || cell.col < 0 || cell.col > 9)
}
isValidCell({row: 1, col: 2})

/** steps to do to achieve this refactoring */
// Step1. simple add the extra argument in the receiving func
const isValidCell = (row, col, cell) => {
    return !(row < 0 || row > 9 || col < 0 || col > 9)
}

// Step1. simple add the extra argument and test
const isValidCell = (row, col, cell) => {
    return !(row < 0 || row > 9 || col < 0 || col > 9)
}
const cell = {row: 1, col: 2}
isValidCell(1, 2, cell)

// Step2. start replacing the parameters one by one (replace row first) and test
const isValidCell = (row, col, cell) => {
    return !(cell.row < 0 || cell.row > 9 || col < 0 || col > 9)
}
const cell = {row: 1, col: 2}
isValidCell(1, 2, cell)

// Step3. remove replaced parameter and test
const isValidCell = (col, cell) => {
    return !(cell.row < 0 || cell.row > 9 || col < 0 || col > 9)
}
const cell = {row: 1, col: 2}
isValidCell(2, cell)

// Step4. now replace col and test
const isValidCell = (col, cell) => {
    return !(cell.row < 0 || cell.row > 9 || cell.row < 0 || cell.row > 9)
}
const cell = {row: 1, col: 2}
isValidCell(2, cell)

// Step5. remove replaced parameter and test
const isValidCell = (cell) => {
    return !(cell.row < 0 || cell.row > 9 || col < 0 || col > 9)
}
const cell = {row: 1, col: 2}
isValidCell(cell)


/** how to identify the refactoring?
 * groups of data items that regularly travel together appearing in function after function.
*/

/**
 * Benefits:
 * Grouping data into a structure is valuable because it makes explicit the relationship between the data items.
 * It reduces the size of parameter lists for any function that uses the new structure.
 * It helps consistency since all functions that use the structure will use the same names to get at its elements.
 * 
 * But the real power of this refactoring is how it enables deeper changes to the code.
    When I identify these new structures, I can reorient the behavior of the program to use these structures.
    I will create functions that capture the common behavior over this data—either as a set of common functions
    or as a class that combines the data structure with these functions. This process can change the conceptual
    picture of the code, raising these structures as new abstractions that can greatly simplify my understanding of the domain.
    The great benefits of making a class like this is that I can then move behavior into the new class
 * 
 */

/**
 * Note: not going into making a class for grouping the data. maybe some time later.
 */
