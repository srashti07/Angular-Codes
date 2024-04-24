"use strict";
//Define User class
class User {
    //constuctor 
    constructor(username, password, contact, email, address) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }
    //getter and setter methods
    set username(value) {
        this.username = value;
    }
    get username() {
        return this.username;
    }
    set password(value) {
        this.password = value;
    }
    get password() {
        return this.password;
    }
    set contact(value) {
        this.contact = value;
    }
    get contact() {
        return this.contact;
    }
    set email(value) {
        this.email = value;
    }
    get email() {
        return this.email;
    }
    set address(value) {
        this.address = value;
    }
    get address() {
        return this.address;
    }
}
const submitUser = (formData) => {
    //Fetch form values using Object.fromentries()
    let form = Object.fromEntries(new FormData(formData));
    const user = new User(form.username, form.password, parseInt(form.contact), form.email, form.address);
    //call registerUser method with the constructed User object
    registerUser('http://localhost:3000/users', user);
    //Do not modify or delete;return false will stop the page reload to happen after form submission
    return false;
};
//POST data using fetch() api
function registerUser(url, user) {
    // return the promise returned by the fetch() method
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
        document.getElementsByTagName("form")[0].innerHTML += "You have successfully registered!";
    });
    /*
    Post successful submission to server,
    the function should display the text `You have successfully registered!` on the page
    */
}
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    registerUser
};
