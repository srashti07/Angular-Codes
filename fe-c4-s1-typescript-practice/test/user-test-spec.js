const chai = require('chai');
const expect = chai.expect;
const script = require('../solution/public/js/user.js');
const fetchMock = require('fetch-mock');
const { JSDOM } = require("jsdom");

describe("Register user", () => {

  let user = {
    "id": 2,
    "_username": "Kevin",
    "_contact": 9878909881,
    "_password": "111",
    "_email": "kevin@gmail.com",
    "_address": "Park Street,NJ"
  };

  before(() => {
    return JSDOM.fromFile('./solution/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
      });

  });

  afterEach(() => fetchMock.restore());
  it("submitUser function should capture and save user details", function (done) {
    // Declare the URL we want to make the request to
    const url = 'http://localhost:3000/users/';

    fetchMock.post(url, user);
    script.registerUser(url, user)
      .then((res) => {
        const lastCallArgs = fetchMock.lastCall();
        expect(lastCallArgs[0]).to.equal('http://localhost:3000/users/');
        expect(lastCallArgs[1].method).to.equal('POST');
        expect(lastCallArgs[1].body).to.equal(JSON.stringify(user));
        expect(document.body.innerHTML).to.contain("You have successfully registered!");
        done();
      })
  })
})

