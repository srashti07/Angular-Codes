// Define User class
class User {
    // Field declarations
    private _username: string;
    private _password: string;
    private _contact: number;
    private _email: string;
    private _address: string;

    // Constructor
    constructor(username: string, password: string, contact: number, email: string, address: string) {
        this._username = username;
        this._password = password;
        this._contact = contact;
        this._email = email;
        this._address = address;
    }

    // Getter and setter methods
    set username(value: string) {
        this._username = value;
    }

    get username() {
        return this._username;
    }

    set password(value: string) {
        this._password = value;
    }

    get password() {
        return this._password;
    }

    set contact(value: number) {
        this._contact = value;
    }

    get contact() {
        return this._contact;
    }

    set email(value: string) {
        this._email = value;
    }

    get email() {
        return this._email;
    }

    set address(value: string) {
        this._address = value;
    }

    get address() {
        return this._address;
    }
}

const submitUser = (formData: any) => {
    // Fetch form values using Object.fromEntries()
    let form = Object.fromEntries(new formData(formData));

    const user: User = new User(form.username, form.password, parseInt(form.contact), form.email, form.address);

    // Call registerUser method with the constructed User object
    registerUser('http://localhost:3000/users', user);

    // Do not modify or delete; return false will stop the page reload from happening after form submission
    return false;
}

// POST data using fetch() API
function registerUser(url: string, user: User) {
    // Return the promise returned by the fetch() method
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementsByTagName("form")[0].innerHTML += "You have successfully registered!";
        })
        .catch(error => {
            console.error('Registration failed', error);
        });
}

// Do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    registerUser
};
