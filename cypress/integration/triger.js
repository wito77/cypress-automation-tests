/// <reference types="cypress" />

describe("E2E - Scrollowanie i najechanie", () => {
  it("Najechanie na element", () => {
    cy.visit("/")

    cy.get(`a[title="Dresses"]`).eq(1).trigger("focus")
    cy.get(`li.sfHover a[title="Summer Dresses"]`).click()

  })
  it("Scrollowanie", () => {
    cy.get(`a[title="Specials"]`).first().scrollIntoView()
  })
})