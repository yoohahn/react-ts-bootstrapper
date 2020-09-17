// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

addMatchImageSnapshotCommand({
  failureThreshold: 0.01,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.001 },
  capture: "viewport",
});

Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.Commands.add("goToPage", (url) => {
  cy.visit(url);
  cy.server();
});
