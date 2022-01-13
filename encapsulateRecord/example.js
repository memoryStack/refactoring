
// Case1: the data is pretty shallow
const organisation = {
    name: "Areen",
    country: "IN",
}

// usecase_1: read a field from record
console.log(organisation.name)
// usecase_2: update the value of name field
organisation.name = "A"

// Step1: encapsulate the variable with a temp func name because we will be removing this func
//          and replace the exiting code where organisation record is read and updated like below
function getOrganisationRawData() {
    return organisation
}
console.log(getOrganisationRawData().name)
getOrganisationRawData().name = "A"

// now we want to control how the variable/record gets
// manipulated, we will achieve this with making a class 
// Step2: introduce a class Organisation
class Organisation {
    constructor(data) {
        this._data = data
    }
}

const organisation = new Organisation({ name: "Areen", country: "IN" })
function getOrganisationRawData() {
    return organisation._data
}
console.log(getOrganisationRawData().name)
getOrganisationRawData().name = "A"

// at this point we have an object "organisation" instead of record, we need to update the existing code from Step1
// where the properties is read or written with the corresponding getters and setters
// Step3: add getters and setters for fields and update the users of organisation object
class Organisation {
    constructor(data) {
        this._data = data
    }

    get name() {
        return this._data.name
    }

    set name(newName) {
        this._data.name = newName
    }
}

const organisation = new Organisation({ name: "Areen", country: "IN" })
console.log(organisation.name)
organisation.name = "A"
// at this point this func become useless and this below func can also be removed
// function getOrganisationRawData() {
//     return organisation._data
// }

// Step4: we want to flatten the "_data" into the object itself with the individual fields as properties
//          we want to have this to break the link between input data "data" because if we don't do that then
//          it's possible that a reference to "data" is running around and that might break the encapsulation.
//          if we don't want to flatten the fields in object then it would be wise to copy the input data "data"
//          with a new reference just to break the reference link.
class Organisation {
    constructor(data) {
        this._name = data.name
        this._country = data.country
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    get country() {
        return this._country
    }

    set country(newCountry) {
        this._country = newCountry
    }
}

const organisation = new Organisation({ name: "Areen", country: "IN" })
console.log(organisation.name)
organisation.name = "A"
console.log(organisation.country)
organisation.country = "Africa"

// Case2: the data is nested like below (maybe data is coming from some API)
// "1920": {
//     name: "martin",
//     id: "1920",
//     usages: {
//         "2016": {
//             "1": 50,
//             "2": 55,
//             // remaining months of the year
//         },
//         "2015": {
//             "1": 70,
//             "2": 63,
//             // remaining months of the year
//         }
//     }
// },
// "38673": {
//     name: "neal",
//     id: "38673",
//     // more customers in a similar form
// }

// general need of doing this
/**
 * when working with big data structure, the most important thing to do is focus on the updates made to the DS.
 * Getting them visible in one place inside a class is the most important value encapsulation provides.
 * throughout the code base we won't have to be worried about where the DS got changed.
 * 
 * How to know that we have covered all the updates to big DS in our excapsulation:
 *      TODO:
 * 
 */

const customerData = {} // data as per the above contract
customerData[customerID].usages[year][month] = amount // modify the data in DS
const janUsage = customerData[customerID].usages[year]["1"] // read the data

//////////////////////////////////
// encapsulate the variable
class CustomerData {
    constructor(data) {
        this._data = data
    }
}

const customerData = new CustomerData(data)
function getCustomerRawData() {return customerData._data}
function setCustomerRawData(data) {customerData = new CustomerData(data)}

// add setter for updating the data
class CustomerData {
    constructor(data) {
        this._data = data
    }
    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount
    }
}
customerData.setUsage(customerID, year, month, amount)

// same way we can use the getters for the read usecases so that we don't dig into the DS all the time
/**
 * Problem in the above approach: 1
 *      there can be a lot of code in the class for a lot of special use-cases.
 * Solution: 2
 *      Modern programming languages are efficient and concise in searching the data from DS so we can just hand over
 *      the raw data underneath.
 * Problem in 2: 3
 *      then encapsulation is just wasted. client code can change the data and we won't know it.
 * Solution for 3: 4
 *      we can return a deep copy to client when it wants to read something.
 * Problem in 4: 5
 *      making deep copy is exensive everytime. (yeah i have experience in this part)
 * TODO: Solution to above will be discussed later. in some other technique
 *      
 */

