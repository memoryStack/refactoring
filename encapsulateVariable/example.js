const { getDefaultOwner, setDefaultOwner } = require('./owner.js')

// after refactoring the code looks like below

const spaceship = {}
spaceship.owner = getDefaultOwner() // read the variable
console.log(spaceship.owner)
setDefaultOwner({ firstName: "Sun", lastName: "Sunrise" })
console.log(getDefaultOwner()) // set variable

spaceship.owner.firstName = 42 // but we can still set the variables like this with no valdations which we don't want
console.log(spaceship.owner)

/**
    now we can put validations in the funcs where we are setting "defaultOwner" variable.
    now we can expose the functions which will let the updates happen to the object in a controlled way.
    this is working one level deep only right now, if we want to control the access to the deeper properties
    then we have to put more funcs in the class

*/
