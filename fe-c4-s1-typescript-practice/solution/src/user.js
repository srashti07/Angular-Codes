// Define User class
var User = /** @class */ (function () {
    // Constructor
    function User(username, password, contact, email, address) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        // Getter and setter methods
        set: function (value) {
            this._username = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "contact", {
        get: function () {
            return this._contact;
        },
        set: function (value) {
            this._contact = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
// Function to submit user data
var submitUser = function (formData) {
    // Fetch form values using Object.fromEntries()
    var form = Object.fromEntries(new FormData(formData));
    var user = new User(form.username, form.password, parseInt(form.contact), form.email, form.address);
    // Call registerUser method with the constructed User object
    registerUser('http://localhost:3000/users', user);
    // Do not modify or delete; return false will stop the page reload from happening after form submission
    return false;
};
// Function to register user data using fetch() API
function registerUser(url, user) {
    // Return the promise returned by the fetch() method
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    fetch(url, requestOptions)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        document.getElementsByTagName("form")[0].innerHTML += "You have successfully registered!";
    })
        .catch(function (error) {
        console.error('Registration failed', error);
    });
}
// Export the registerUser function
module.exports = {
    registerUser: registerUser
};
