/// <reference types="cypress" />

import AlertPage from "../support/page-object/alertPage"

describe("E2E - Alerts", () => {
  it("Alerts", () => {
    cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")

    // cy.get("#alert").click()
    // cy.on("window:alert", alertText => {
    //   expect(alertText).to.equal("Przykładowa treść alertu")
    // })

    AlertPage.clickOnBtnAlert1()
    AlertPage.verifyAlertText("Przykładowa treść alertu")
    AlertPage.rejectAlert()
  })
  it("Alert confirm", () => {
    cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")

    // cy.get("#alert-confirm").click()
    // cy.on("window:confirm", alertText2 => {
    //   expect(alertText2).to.equal("Zaakceptuj aby kontynuować!")
    // })
    // cy.on("window:confirm", () => true)

    AlertPage.clickOnBtnAlert2()
    AlertPage.verifyAlertConfirmText()
    AlertPage.acceptAlert()

  })
})