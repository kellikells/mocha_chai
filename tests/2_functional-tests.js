const chai = require("chai");
const assert = chai.assert;

const server = require("../server");

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Integration tests with chai-http", function () {
    // #1 - 19
    test("Test GET /hello with no name", function (done) {
      chai
        .request(server)
        .get("/hello")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello Guest");
          done();
        });
    });
    // #2 -20
    test("Test GET /hello with your name", function (done) {
      chai
        .request(server)
        .get("/hello?name=xy_z")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "hello xy_z");
          done();
        });
    });
    // #3 -21
    test('send {surname: "Colombo"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        .send({ surname: 'Colombo' })

        .end(function (err, res) {
          assert.equal(res.status, 200, 'response should be 200');
          assert.equal(res.type, 'application/json', 'Response should be json');
          assert.equal(res.body.name, 'Cristoforo', 'res.body.name should be Cristoforo');
          assert.equal(res.body.surname, 'Colombo', 'res.body.surname should be Colombo');

          done();
        });
    });
    // #4 -22
    test('send {surname: "da Verrazzano"}', function (done) {
      chai
        .request(server)
        .put("/travellers")
        .send({ surname: 'Verrazzano' })
        .end(function (err, res) {
          assert.equal(res.status, 200, 'response should be 200');
          assert.equal(res.type, 'application/json', 'Response should be json');
          assert.equal(res.body.name, 'Giovanni', 'res.body.name should be Giovanni');
          assert.equal(res.body.surname, 'da Verrazzano', 'res.body.surname should be de Verrazzano');
          done();
        });
    });
  });

  const Browser = require("zombie");
  Browser.site = 'https://boilerplate-mochachai-1.kellikells.repl.co'; // Your URL here


  suite("Functional Tests with Zombie.js", function () {
    const browser = new Browser();
    suiteSetup(function (done) {
      return browser.visit('/', done);
    });
    suite('"Famous Italian Explorers" form', function () {
      // #5 -23
      test('submit "surname" : "Colombo" - write your e2e test...', function (done) {
        browser.fill("surname", "Colombo").pressButton("submit", function () {
          browser.assert.success(browser.status, 200);
          browser.assert.text('span#name', 'Cristoforo');
          browser.assert.text('span#surname', 'Colombo');
          browser.assert.elements('span#dates', 1);

          done();
        });
      });
      // #6 -24
      test('submit "surname" : "Vespucci" - write your e2e test...', function (done) {
        browser.fill('surname', 'Vespucci').pressButton('submit', function () {
          browser.assert.success(browser.status, 200);
          browser.assert.text('span#name', 'Amerigo');
          broswer.assert.text('span#surname', 'Vespucci');
          browser.assert.elements('span#dates', 1);
          //   })
          // Fill in the form with the surname of Vespucci
          // Submit it pressing 'submit' button
          // Within the callback:

          // assert that status is 200
          // assert that the text inside the element span#name is 'Amerigo'
          // assert that the text inside the element span#surname is 'Vespucci'
          // assert that the element(s) span#dates exist and their count is 1


          done();
        });
      });
    })
  })
  });
