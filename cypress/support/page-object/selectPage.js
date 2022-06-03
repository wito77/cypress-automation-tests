class selectPage {
  get select() {
    return cy.get("#selectProductSort")
  }

  selectAllOption() {
    this.select.then(select => {
      cy.wrap(select).find("option").each(item => {
        cy.wrap(select).select(item.text())
      })
    })
  }
}

export default new selectPage()