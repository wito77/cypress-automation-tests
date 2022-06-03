class AlertPage {
  get btnAlert1() {
    return cy.get("#alert")
  }
  get btnAlert2() {
    return cy.get("#alert-confirm")
  }

  clickOnBtnAlert1() {
    this.btnAlert1.click()
  }

  clickOnBtnAlert2() {
    this.btnAlert2.click()
  }

  verifyAlertText(textAlert) {
    cy.on("window:alert", alertText => {
      expect(alertText).to.equal(textAlert)
    })
  }

  verifyAlertConfirmText() {
    cy.on("window:confirm", alertText2 => {
      expect(alertText2).to.equal("Zaakceptuj aby kontynuować!")
    })
  }

  rejectAlert() {
    cy.on("window:confirm", () => false)
  }

  acceptAlert() {
    cy.on("window:confirm", () => true)
  }
}

export default new AlertPage()