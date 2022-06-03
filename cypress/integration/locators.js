/// <reference types="cypress" />

describe("E2E - Locators", () => {
  it("Lokalizatory", () => {
    cy.visit("/")

    //znacznik
    cy.get("a");

    //identyfikator
    cy.get("#search_query_top")

    //klasy
    cy.get(".form-control")

    //atrybuty
    cy.get('[name="search_query"]')
    cy.get('[Placeholder="Search"]')

    //kilka atrybutów
    cy.get('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

  })
  it('Lokalizatory część 2', () => {
    cy.contains("Shop now !")
    cy.contains('[title="Contact us"]', 'Contact us')

    //odwoływanie się po rodzicu
    cy.get("li").parents("#home-page-tabs").find("li").eq(1)
    cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")


  })
})