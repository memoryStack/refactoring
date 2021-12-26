// before refactoring the code looks like below

let defaultOwner = {firstName: "Martin", lastName: "Fowler"}

const spaceship = {}
spaceship.owner = defaultOwner // read the variable
defaultOwner = {firstName: "Rebecca", lastName: "Parsons"} // update the variable
defaultOwner.firstName = 42 // i just put 42 here instead of a valid string. maybe we want to put validation checks here

/**
    Note: this is useful for mutable data only. because Immutable Data is anyways not going to be changed so we
        don't need to monitor how it's used and put validations for updating it.
    why to encapsulating data ??
        a. It provides a clear point to monitor changes and use of the data.
        b. I can easily add validation or consequential logic on the updates.
*/
