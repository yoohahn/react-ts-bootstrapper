/// <reference types="cypress" />

describe("🚬 tests", () => {
  context("/", () => {
    it("Should be visible", () => {
      cy.goToPage("/");
      cy.get('[alt="logo"]').should("be.visible");
    });
  });
});
