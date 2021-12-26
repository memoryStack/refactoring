const { getDefaultOwner, setDefaultOwner }  = require('./owner.js')
// import  from "../encapsulateRecord/owner";

// after refactoring the code looks like below

const spaceship = {}
spaceship.owner = getDefaultOwner() // read the variable
console.log(spaceship.owner)
setDefaultOwner({ firstName: "Sun", lastName: "Sunrise" })
console.log(getDefaultOwner()) // set variable

spaceship.owner.firstName = 42 // but we can still set the variables like this which we don't want
console.log(spaceship.owner)

/**
    now we can put validations in the funcs where we are setting "defaultOwner" variable
*/
