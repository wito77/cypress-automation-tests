/// <reference types="cypress" />

describe("E2E - Akcje kliknięcia checkbox", () => {
  it("Checkbox", () => {
    cy.visit("/index.php?id_category=3&controller=category")

    cy.get('#ul_layered_category_0').find("input").then(checkbox => {
      cy.get(checkbox).eq(0).check()
      cy.get(checkbox).eq(1).check({ force: true }).invoke("prop", "checked").then(zaznaczony => {
        cy.log(zaznaczony)
      })
    })

    cy.get('#ul_layered_id_attribute_group_1').find("input").check()
  })
})