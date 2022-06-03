/// <reference types="cypress" />

describe("E2E - Typing", () => {
  it("Wpisywanie wartości w pole", () => {
    cy.visit("/")
    cy.get("#search_query_top").type("Produkt {enter}", { delay: 500 })
    // cy.get('[title="Return to Home"]').click()
  })
  it("Czyszczenie wartości z pola", () => {
    cy.get("#search_query_top").clear()
  })
})