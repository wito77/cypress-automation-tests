/// <reference types="cypress" />

describe("E2E - Environment Variables", () => {
  it("Zmienne środowiskowe", () => {
    cy.visit(Cypress.env("url"))

  })

})