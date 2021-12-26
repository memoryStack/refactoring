
let defaultOwner = {firstName: "Martin", lastName: "Fowler"} // shared data through out the code
function getDefaultOwner() {return defaultOwner} // function to read variable
function setDefaultOwner(arg) {defaultOwner = arg} // function to write variable

module.exports = {
    getDefaultOwner,
    setDefaultOwner,
}
