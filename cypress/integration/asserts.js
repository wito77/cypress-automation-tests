/// <reference types="cypress" />

describe("E2E - Assercje", () => {
  it("Expect/Should", () => {
    cy.visit("/")
    // cy.contains('[title="Contact us"]', "Contact us").click()
    cy.get('a[title="Contact us"]').should("contain", "Contact us")
    cy.get('a[title="Contact us"]').then(zakladka => {
      expect(zakladka).to.contain("Contact us")
    })

    //nie zawiera
    cy.get('a[title="Contact us"]').should("not.contain", "aasddfdsfg")
    cy.get('a[title="Contact us"]').then(zakladka => {
      expect(zakladka).not.to.contain("aasddfdsfg")
    })

    //czy posiada klase
    cy.get("#search_query_top").should("have.class", "form-control")
    cy.get("#search_query_top").then(wyszukiwarka => {
      expect(wyszukiwarka).to.have.class("form-control")
    })

    //czy jest widoczny
    cy.get("#search_query_top").should("be.visible")

    //weryfikacja ilości pobranych elementów
    cy.get("ul.sf-menu").find("li").should("have.length", 14)
    cy.get("ul.sf-menu").find("li").then(zakladki => {
      expect(zakladki).to.have.length(14)
    })

    //weryfikacja css
    cy.get("#search_query_top").should("have.css", "line-height", "45px")
    cy.get("#search_query_top").then(wyszukiwarka => {
      expect(wyszukiwarka).to.have.css("line-height", "45px")
    })
  })
})