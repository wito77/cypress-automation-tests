describe("Lighthouse Test", () => {
  it("should verify the lighthouse scores with thresholds", function () {
    cy.visit("http://www.klubmilosnikowpizzy.pl/kalkulator-pizzy/")
    cy.lighthouse({
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    });
  });
})