// before refactoring the variable is like this
const t = "some title"

// after refactoring we want it to be something like this
const title = "some title"

/**
 * here right now i am demonstrating only 1 use case
 *      when variable is constant or read only
 */

const newName = "old value"
const oldName = newName

/**
 * using this approach we can replace "oldName" with "newName" slowly slowly over multiple iterations.
 * and once the replacement is done 100% then we can simply delete/comment statement "const oldName = newName"
 * and after removing it if there are some problems occur then we can again un-comment the statement without much hassle.
 * 
 * Note: from personal experience
 *      i was doing it like below earlier
 *          const oldName = "old value"
            const newName = oldName
        but above approach is a little bit better. Think why ?
    Note: If there are references from another code base, the variable is a published variable, and you cannot do this refactoring.
 */
