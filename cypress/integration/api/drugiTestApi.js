/// <reference types="cypress" />

describe("Wykonywanie zapytania bezpośrednio do API", () => {
  beforeEach(function () {
    cy.fixture("example").then(data => {
      this.daneApi = data;
    })
  })

  it("Autoryzacja + Dodawanie nowego artykułu", () => {
    const authData = {
      "user": {
        "email": "kacper@test.pl",
        "password": "test123"
      }
    }

    const articleData = {
      "article": {
        "tagList": [],
        "title": "title from API",
        "description": "test",
        "body": "test"
      }
    }

    cy.request("POST", "https://api.realworld.io/api/users/login", authData)
      .its("body").then(res => {
        const authToken = res.user.token;

        cy.request({
          method: "POST",
          url: "https://api.realworld.io/api/articles/",
          body: articleData,
          headers: {
            'Authorization': 'Token ' + authToken
          }
        }).then(res => {
          expect(res.status).to.equal(200)
        })
      })
  })

})