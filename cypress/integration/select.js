/// <reference types="cypress" />

import SelectPage from "../support/page-object/selectPage"

describe("E2E - Akcje wybranie droplisty", () => {
  it("Wybieranie opcji", () => {
    cy.visit("/index.php?id_category=3&controller=category")

    cy.get('#selectProductSort').select("In stock")

    cy.get('#selectProductSort').select("price:asc")

    cy.get('#selectProductSort').select(7)
  })

  it.only("Wybieranie wszystkich opcji", () => {
    cy.visit("/index.php?id_category=3&controller=category")


    //poniżej stary kod - zastąpiony przez POM z selectPage
    SelectPage.selectAllOption()


    // cy.get('#selectProductSort').then(select => {
    //   cy.wrap(select).find("option").each(item => {
    //     cy.wrap(select).select(item.text())
    //   })
    // })
  })
})