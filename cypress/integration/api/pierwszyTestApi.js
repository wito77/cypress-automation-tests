/// <reference types="cypress" />

describe("E2E - API Tests", () => {
  it("Weryfikacja tagów", () => {
    cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag")
    cy.visit("https://angular.realworld.io/")
    cy.wait("@requestTag")
    cy.get("@requestTag").then(response => {
      console.log(response);
      expect(response.response.statusCode).to.eq(200)
      expect(response.response.body.tags).to.contain("welcome")
    })
  })
  it("Niepoprawne logowanie", () => {
    cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
    cy.get("a.nav-link").contains("Sign in").click()
    cy.login("test123", "sdfwertg345#$")
    cy.wait("@requestLogin").then(res => {
      console.log(res);
      expect(res.response.statusCode).to.eq(403)
      cy.fixture("example").then(data => {
        expect(res.response.statusMessage).to.eq(data.statusMessage403)
      })
      // expect(res.response.statusMessage).to.eq("Forbidden")
    })
  })
  it("Poprawne logowanie", function () {
    cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'tags.json' }).as("requestTag")
    cy.login("kacper@test.pl", "test123")
    cy.wait("@requestTag")
  })
})