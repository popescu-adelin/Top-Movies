describe("Automation test", () => {
  it("Has titles ?", () => {
    cy.visit("https://betterqa.ro/top-movies/");
    cy.get('input[name="post_password"]').type("do_not_share!1");
    cy.get('input[name="Submit"]').click();
    cy.get("h2").should("have.class", "jss39 jss44");
  }),
    it("Corect date?", () => {
      cy.get('span[class="jss95"]').first().click();
      cy.get('div[role="document"] div.jss122').scrollTo("bottom");
      cy.get('input[value="1994-09-23"]').should("have.value", "1994-09-23");
    }),
    it("Star Trek exists?", () => {
      cy.get('div[role="document"] div.jss140 span.jss95').click();
      cy.get('input[type="search"]').type("Star Trek{enter}");
      cy.get("div.movies")
        .contains("The Shawshank Redemption")
        .should("not.exist");
      cy.get("div.movies").contains("Star Trek: First Contact");
    }),
    it("The God Father data", () => {
      cy.get('input[type="search"]').clear().type("The Godfather{enter}");
      cy.get('span[class="jss95"]').first().click();
      //cy.get('div[role="document"] div.jss122').scrollTo('bottom');
      cy.get(' input[value="1972-03-14"]').should("have.value", "1972-03-14");
      cy.get(' input[value="68.454"]').should("have.value", "9.000.000");
      cy.get(' input[value="8.7"]').should("have.value", "9.7");
      cy.get(' input[value="16053"]').should("have.value", "1.790.752");
    });
});
