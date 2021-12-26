
let defaultOwner = {firstName: "Martin", lastName: "Fowler"} // shared data through out the code
function getDefaultOwner() { return new Person(defaultOwner) } // function to read variable
function setDefaultOwner(arg) {defaultOwner = arg} // function to write variable

class Person {
    constructor(data) {
        this._firstName = data.firstName
        this._lastName = data.lastName
    }

    get firstName() { return this._firstName }
    set firstName(firstName) { this._firstName = firstName }

    get lastName() { return this._lastName }
    set lastName(lastName) { this._lastName = lastName }
}

module.exports = {
    getDefaultOwner,
    setDefaultOwner,
}
